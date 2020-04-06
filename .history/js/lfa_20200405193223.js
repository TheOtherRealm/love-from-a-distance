/*
 Created		: Mar 18, 2020, 6:44:36 PM
 Author		: Aaron E-J <the at otherrealm.org>
 Copyright(C): 2020 Other Realm LLC
 This program is free software: you can redistribute it and/or modify
 it under the terms of the latest version of the GNU Affero General Public License as published by
 the Free Software Foundation, using at least version 3.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details: <http://www.gnu.org/licenses/>.
 */
/* global tagify, CryptoJS 
*/
(function () {
	const data = {
		title: 'Love From Afar',
		you: {
			name: {
				id: 'name',
				type: 'input-text',
				label: 'Enter your name',
				text: 'Your Name',
				required: true
			},
			email: {
				id: 'email',
				type: 'input-email',
				label: 'Enter your email',
				placeholder: 'address@example.com',
				title: 'Enter your email',
				required: true
			},
			phone: {
				id: 'phone',
				type: 'input-tel',
				label: 'Enter your phone number (ex: 1-234-567-8900)',
				placeholder: '1-234-567-8901',
				title: 'Enter your phone number (ex: 1234567890)',
				pattern: "([0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{11}|[0-9]{10})",
				required: null
			},
			waysto: {
				id: 'waysto',
				type: "select-multiple",
				label: 'Would you like to be <span class="bold">yourself</span>, a <span class="bold">predesigned</span> fictional character<span class="gray superscript" title="(Potentially costs money)">$</span>, or a fictional character<span class="bold"> you create</span>',
				option: [
					{ id: 'yourself', text: "Yourself" },
					{ id: 'predesigned', text: "Predesigned" },
					{ id: 'createdbyyou', text: "Fictional character created by you" }
				],
				required: true
			},
			gender: {
				id: 'gender',
				type: 'input-text',
				label: "Enter your gender (Identity, i.e. how you perceive yourself romantically to	others)",
				text: 'Your gender',
				required: true
			},
			sexualAttraction: {
				id: 'sexualAttraction',
				type: 'input-text',
				label: "Enter your what gender you are attracted to, if it doesn't matter, don't put anything",
				text: 'Your gender of attraction',
				required: null
			},
			interests: {
				id: 'interests',
				type: 'input-text',
				label: "Enter your interests",
				text: 'Your interests',
				required: true
			},
			location: {
				id: 'location',
				type: 'input-text',
				label: "The town or city, state or province, and nation you live in. (So that you can try to find someone close by, and if we can ever leave, meet up in person!)",
				text: 'Boston, MA USA',
				required: true
			},
			about: {
				id: 'about',
				type: 'textarea',
				label: "About you (please be as descriptive as possible – essay style if you want!)",
				text: 'Please be as descriptive as possible – essay style if you want!',
				required: true,
				maxlength: 100000,
				minlength: 150
			},
			objectives: {
				id: 'objectives',
				type: 'textarea',
				label: "What are your objectives? What do you want to achive?",
				text: 'Please be as descriptive as possible – essay style if you want!',
				required: true,
				maxlength: 100000,
				minlength: 150
			},
		}
	}
	/*

				<label for="objectives">What are your objectives? What do you want to achive?<span
						  class='gray'>*</span>:</label><br>
				<textarea id="objectives" maxlength="100000" minlength="150" name="objectives" class="form-control"
						  placeholder="Please be as descriptive as possible – essay style if you want!"
						  required></textarea>
	*/
	Handlebars.registerHelper('textarea', function (c, o) {
		let html = '<p><label for="' + c.id + '">' + c.label + (c.required ? '<span class="gray">*</span>:' : ':') + '</label><br>\
		<textarea id="'+ c.id + '" maxlength="100000" minlength="150" name="' + c.id + '" class="form-control" title="' + c.text + '" placeholder="' + c.text + '" ' + (c.required ? "required" : '') + ' aria-required="' + (c.required ? true : false) + '" ></textarea>';
		return html;
	});
	Handlebars.registerHelper('input-hidden', function (c, o) {
		let html = '<input type="hidden" id="'+ c.id + '" name="' + c.id + '">';
		return html;
	});
	Handlebars.registerHelper('input-text', function (c, o) {
		let html = '<p><label for="' + c.id + '">' + c.label + (c.required ? '<span class="gray">*</span>:' : ':') + '</label><br>\
		<input type="text" id="'+ c.id + '" name="' + c.id + '" placeholder="' + c.text + '" ' + (c.required ? "required" : '') + ' class="form-control" title="' + c.text + '" ></p>'
		return html;
	});
	Handlebars.registerHelper('input-email', function (c, o) {
		let html = '<p><label for="' + c.id + '">' + c.label + (c.required ? '<span class="gray">*</span>:' : ':') + '</label><br>\
		<input type="email" id="'+ c.id + '" name="' + c.id + '" placeholder="' + c.placeholder + '" ' + (c.required ? "required" : '') + ' class="form-control" title="' + c.title + '"></p>'
		return html;
	});
	Handlebars.registerHelper('input-tel', function (c, o) {
		// console.log(c, ';', o);
		let html = '<p><label for="' + c.id + '">' + c.label + (c.required ? '<span class="gray">*</span>:' : ':') + '</label><br>\
		<input type="tel" id="'+ c.id + '" name="' + c.id + '" pattern="([0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{11}|[0-9]{10})" placeholder="' + c.placeholder + '" ' + (c.required ? "required" : '') + ' class="form-control"></p>'
		return html;
	});
	/*
		Handlebars.registerHelper('select-multiple', function(c,o){
			console.log(c,';',o);
			let html='<label>'+c.label+'</label>\
			<select name="'+c.id+'" multiple class="form-control">\
				{{#each you.waysto.option}}\
				<option value="'+c.id+'" id="'+c.id+'" class="form-control">{{{this.text}}}</option>\
				{{/each}}\
			</select>'
			return html;
		});
	*/
	function boxToFill(input, wl) {
		tagify = new Tagify(input, {
			whitelist: wl,
			maxTags: 10,
			dropdown: {
				maxItems: 20, // <- mixumum allowed rendered suggestions
				classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
				enabled: 0, // <- show suggestions on focus
				closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
			}
		});
	}
	$(document).ready(function () {
		$('form').submit(function (f) {
			f.preventDefault();
			var form = JSON.parse(JSON.stringify($("form").serializeArray()));
			console.log(f);
			// form.push({ "name": "form", "value":  });
			console.log(form);
			$.post('../../love-from-afar-ss/love-from-afar-ss.php', form, function (d) {
				console.log(d);
			}).done(function () {
				location.hash = 'yourlover';
			});
		});
		$('#save').click(function (f) {
			f.preventDefault();
			var formPage = $(this).attr('data-button');
			var form = JSON.parse(JSON.stringify($('#intrestForm').serializeArray()));
			//		formPage = form.value;
			form.push({ "name": "form", "value": formPage });
			console.log(f);
			$.post('../../love-from-afar-ss/love-from-afar-ss.php', form, function (d) {
				console.log(d);
			});
		});
		$('#backB').click(function (f) {
			f.preventDefault();
			var formPage = $(this).attr('data-button');
			var form = JSON.parse(JSON.stringify($('#intrestForm').serializeArray()));
			formPage = $('#intrestForm').attr('name');
			form.push({ "name": "form", "value": formPage });
			console.log(f);
			$.post('../../love-from-afar-ss/love-from-afar-ss.php', form, function (d) {
				console.log(d);
			});
			window.history.back();
		});
	});
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					// form.classList.add('needs-validation');
					event.preventDefault();
					event.stopPropagation();
				} 
				// else {
					form.classList.add('was-validated');
				// }
			}, false);
		});
	}, false);
	var body = $('#app').html();
	var template = Handlebars.compile(body);
	// console.log(data.you);
	$('#app').html(template(data));
})(jQuery);