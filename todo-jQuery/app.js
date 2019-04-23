$('ul').on('click', '.todo', function() {
	$(this).toggleClass('done');
});

$('ul').on('click', '.delete', function() {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	// event.stopPropagation();
});

$('ul').on('click', '.edit', function() {
	// let icon = $(this).parent().contents()[2];
	// $(this).parent().is('span') ? console.log('SPAN') : console.log('InpuT');
	// console.log($(this).parent().children()[1]);

	let todo = $(this).parent().contents()[1];
	// console.log(todo);
	if ($(todo).text()) {
		let value = $(todo).text();
		let edit = `<input class="edit-todo" type="text" value="${value}">`;
		$(todo).replaceWith(edit);
	}
	// $(icon).replaceWith('<i class="edit check fas fa-check"></i>');
});

$('ul').on('keypress', "input[type='text']", function(event) {
	if (event.which === 13) {
		let todoText = $(this).val();
		$(this).replaceWith(`<span class = "todo"> ${todoText} </span>`);
	}
});

$('#btn').click(addNewTodo);

$("input[type='text']").keypress(function(event) {
	// console.log(this);
	if (event.which === 13) {
		addNewTodo();
	}
});

function addNewTodo() {
	let todoText = $('#new-todo').val();
	if (todoText) {
		$('ul')
			.append(`<li><i class="delete fas fa-trash-alt"></i><span class="todo">${todoText}</span><i class="edit fas fa-pencil-alt"></i></li>
        `);
		$('#new-todo').val('');
	}
}
