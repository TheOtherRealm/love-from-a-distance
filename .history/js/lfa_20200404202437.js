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
				label:'Enter your name',
				text:'Your Name',
				required:"required"
			},
			email:{
				id:'email',
				type:'input-email',
				label:'Enter your email',
				placeholder:'address@example.com',
				title:'Enter your email',
				required:"required"
			},
			phone:{
				id:'phone',
				type:'input-tel',
				label:'Enter your phone number',
				placeholder:'1-234-567-8901',
				title:'Enter your phone number',
				pattern:"([0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{11}|[0-9]{10})",
				required:null
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
				],
				required:"required"
			},
			gender:{
				id:'gender',
				type:'input-text',
				label:"Enter your what gender you are attracted to, if it doesn't matter, don't put anything:",
				text:'Your gender',
				required:"required"
			},
			sexualAttraction:{
				id:'sexualAttraction',
				type:'input-text',
				label:'Enter your name<span class="gray">*</span>:',
				text:'Your Name',
				required:null
			},
		}
	}
	Handlebars.registerHelper('input-text', function(c,o){
		var html='<p><label for="'+c.id+'">'+c.label+(c.required?'<span class="gray">*</span>:':':')+'</label><br>\
		<input type="text" id="'+c.id+'" name="'+c.id+'" placeholder="'+c.text+'" '+(c.required?"require":'')+' class="form-control"></p>'
		return html;
	});
	Handlebars.registerHelper('input-email', function(c,o){
		var html='<p><label for="'+c.id+'">'+c.label+(c.required?'<span class="gray">*</span>:':':')+'</label><br>\
		<input type="email" id="'+c.id+'" name="'+c.id+'" placeholder="'+c.placeholder+'" '+(c.required?"require":'')+' class="form-control"></p>'
		return html;
	});
	Handlebars.registerHelper('input-tel', function(c,o){
		console.log(c,';',o);
		var html='<p><label for="'+c.id+'">'+c.label+(c.required?'<span class="gray">*</span>:':':')+'</label><br>\
		<input type="tel" id="'+c.id+'" name="'+c.id+'" pattern="([0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{11}|[0-9]{10})" placeholder="'+c.placeholder+'" '+(c.required?"require":'')+' class="form-control"></p>'
		return html;
	});
	Handlebars.registerHelper('select-multiple', function(c,o){
		console.log(c,';',o);
		var html='<p><label for="'+c.id+'">'+c.label+(c.required?'<span class="gray">*</span>:':':')+'</label><br>\
		<input type="tel" id="'+c.id+'" name="'+c.id+'" pattern="([0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{11}|[0-9]{10})" placeholder="'+c.placeholder+'" '+(c.required?"require":'')+' class="form-control"></p>'
		return html;
	});
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
	var source = $('#app').html();
	var template = Handlebars.compile(source);
	// console.log(data.you);
	$('#app').html(template(data));
})(jQuery);