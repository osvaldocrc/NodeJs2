window.addEventListener('DOMContentLoaded', e => {
   updateTodos();
});

const mapCheckboxes = () => {
   document.querySelectorAll('.complete-checkbox').forEach(item => {

      item.addEventListener('click', async e => {
         const id = e.target.parentNode.parentNode.id;
         let classes = e.target.parentNode.parentNode.childNodes[3].className.replace('completed', '').trim();

         const completed = e.target.checked;

         const res = await updateTodo(id, completed);

         if (res.response === 'success') {
            if (completed) {
               e.target.parentNode.parentNode.childNodes[3].className += 'completed';
            } else {
               e.target.parentNode.parentNode.childNodes[3].className += 'classes';
            }
         }
      })
   })
}

//--Lista
const updateTodos = () => {
   fetch('http://localhost:3000/getall')
      .then(res => res.json())
      .then(data => {
         if (data.response === 'success') {
            const todos = data.data;

            document.querySelector('#todos').innerHTML = '';

            todos.forEach(element => {
               //console.log(element.text);
               document.querySelector('#todos').innerHTML += `
                  <div class="todo" id="${element._id}">
                     <div class="checkbox-container">
                        <input type="checkbox" class="complete-checkbox" ${(element.completed === true) ? 'checked' : ''}/>
                     </div>
                     <div class="text-container ${(element.completed === true) ? 'completed' : ''}">
                        ${element.text}
                     </div>
                     <div class="actions-container">
                        <a href="/delete/${element._id}">X</a>
                     </div>
                  <div/>
               `
            });

            mapCheckboxes();
         }
      })
      .catch(err => {
         console.log(err);
      });
}

//UpdateById
const updateTodo = async (id, completed) => {
   const res = await fetch('http://localhost:3000/complete/' + id + '/' + completed)
      .then(res => res.json())
      .catch(err => {
         console.log('Error: ' + err);
      });

   return res;
}

//Add todo
document.querySelector('#formulario').addEventListener('submit', e => {
   e.preventDefault();

   const text = document.querySelector('#text').value;
   if (text === '') return false;

   fetch('http://localhost:3000/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text })
   })
      .then(res => res.json())
      .then(data => {
         if (data.response === 'success') {
            updateTodos();
            document.querySelector('#text').value = '';
         }
      });
});