 document.getElementById('ajax').addEventListener('click', getAllEmployess)

 function getAllEmployess() {
     const xhr = new XMLHttpRequest()

     xhr.open('GET', 'employees.json', true) //method, name, asenkron
     xhr.onload = function() {
         let list = document.getElementById('employees')

         if (this.status == 200) {
             const employees = JSON.parse(this.responseText)

             employees.forEach(function(employee) {
                 list.innerHTML += `
                     <tr>
                        <td>${employee.name}</td>
                        <td>${employee.vezife}</td>
                        <td>${employee.salary}</td>
                      </tr>
                `
             })
         }
     }

     xhr.send()
 }