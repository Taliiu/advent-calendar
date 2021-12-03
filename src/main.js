import "./style.css"
import "./tailwind.css"
import doors from "./doors";

function init() {
  doors.forEach(door => {
    const grid = document.getElementById("grid");
    const final_page = document.createElement('div');
    const wrapper = document.createElement('div');
    const task_div = document.createElement('div');
    const link_div = document.createElement('div');
    const form = document.createElement('form');
    const inp = document.createElement('input');
    const btn = document.createElement('button');

    wrapper.classList.add("grid", "grid-rows-2", "bg-red-700", "bg-opacity-75", "rounded-lg");
    wrapper.id = door.correct_answer;
    grid.append(wrapper);

    const box = document.getElementById(`${wrapper.id}`);
    task_div.innerHTML = door.html;
    box.append(task_div);
    form.classList.add("flex", "flex-wrap", "gap-4", "place-self-end", "w-full", "p-6");
    form.id = "answer" + wrapper.id;
    box.append(form);

    const form_box = document.getElementById("answer" + `${wrapper.id}`);
    inp.classList.add("bg-white-400", "bg-opacity-85", "rounded-lg", "border-2", "p-1", "text-black");
    btn.classList.add("bg-green-600", "bg-opacity-85", "rounded-lg", "border-2", "p-1");
    inp.type = "text";
    inp.name = "answer"
    inp.placeholder = "Your Answer"
    btn.id = "submit" + wrapper.id;
    btn.type = "button";
    btn.innerHTML = "Answer"
    form_box.append(inp);
    form_box.append(btn);

    const btn_submit = document.getElementById("submit" + `${wrapper.id}`);
    btn_submit.addEventListener('click', (e) => {
      let val = inp.value;
      const container = document.getElementById('container');
      if (val == door.correct_answer) {
        final_page.classList.add("p-6", "bg-green-300", "rounded");
        final_page.innerHTML = "Your Answer Is Correct!";
        console.log("is correct");
      } else {
        final_page.classList.add("p-6", "bg-red-300", "rounded");
        final_page.innerHTML = "Your Answer Is Incorrect!";
        console.log("value is INCORRECT")
      }
      container.append(final_page);
      grid.classList.add("hidden");
    })
  });
}
document.addEventListener('DOMContentLoaded', init, false);
