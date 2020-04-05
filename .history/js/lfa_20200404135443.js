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
	var data = {
		title: 'Love From Afar',
		you: {
			name:{
				id:'name',
				type:'input-text',
				label:'Enter your name<span class="gray">*</span>:',
				text:'Your Name'
			},
			waysto: {
				id: 'waysto',
				type:"select-multiple",
				label: '<p>Would you like to be <span class="bold">yourself</span>, a <span class="bold">predesigned</span> fictional character<span class="gray superscript" title="(Potentially costs money)">$</span>, a fictional character<span class="bold"> you create</span>, or <span class="bold">multiple</span> characters<span class="gray superscript" title="(Potentially costs money)">$</span>?<br>',
				option: [
					{ id: 'yourself', text: "Yourself" },
					{ id: 'predesigned', text: "Predesigned" },
					{ id: 'createdbyyou', text: "Fictional character created by you" },
					{ id: 'multiple', text: "Multiple" },
				]
			}
		}
	}
	Handlebars.registerHelper('input-text', function(c,o){
		console.log(c,o);
		var html='<p><label for="name">Enter your name<span class="gray">*</span>:</label><br>\
		<input type="text" id="name" name="name" placeholder="Your Name" required class="form-control"></p>'
		return html;
	});
	var source = $('#app').html();
	var template = Handlebars.compile(source);
	// console.log(data.you);
	$('#app').html(template(data));
})(jQuery);