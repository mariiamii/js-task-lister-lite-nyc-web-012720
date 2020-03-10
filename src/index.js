document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let inputField = document.querySelector("#create-task-form");
  document.addEventListener("submit", function(event) {
    event.preventDefault();
    /*
    1. √ identify the ul
    2. √ create an li
    3. √ populate the li's innerHTML
    4. √ attach the li to the ul
    */
    if (event.target.id === "create-task-form") {
      let ul = document.getElementById("tasks");
      let li = document.createElement("li");
      li.innerHTML = `<span class= ${event.target.elements[1].value}>${event.target.elements[0].value}</span><button class = "delete" >&times;</button><button class = "edit" >Edit</button>`;
      ul.append(li);
    }
    if (event.target.id === "edit-task-form") {
      let element = event.target.parentNode;
      element.innerHTML = `<span class= ${event.target.elements[1].value}>${event.target.elements[0].value}</span><button class = "delete" >&times;</button><button class = "edit" >Edit</button>`;
    }
  });

  // let deleteButton = document.querySelector('button');
  document.addEventListener("click", function(event) {
    let element = event.target.parentNode;

    if (event.target.className === "delete") {
      element.parentNode.removeChild(element);
    }
    if (event.target.className === "edit") {
      element.innerHTML = `
      <form id = "edit-task-form">
        <input type="text" value= ${
          element.getElementsByTagName("span")[0].innerText
        } ></input>
        <select> 
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <input type="submit" value= submit>
      </form>
      `;
    }
    /*
    1. identify what to delete
    2. alter the HTML
    3. remove the element completely
    4. blanking the element
    */
  });

  /*
    1. √ add edit button to each task
    2. √ give the button a class
    3. √ add 'if' to the listener to catch the click
    4. √ replace li contents with a form
    5. √ the form's default value will be the previous task
    6. on submit, the li's innerText is replaced with form contents
    */

  /*
    1. add dropdown to froms
    2. during the render step (HTML)
    3. assign a color based on the dropdown
    */
});
