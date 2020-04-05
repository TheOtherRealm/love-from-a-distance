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
		title:'Love From Afar',
		waysto: [
			{ id: 'yourself', text: "Yourself" },
			{ id: 'predesigned', text: "Pedesigned" },
			{ id: 'createdbyyou', text: "Created by you" },
			{ id: 'multiple', text: "Multiple" },
			{lable:''}
		]
	}
	var source=$('#app').html();
	var template = Handlebars.compile(source);
	$('#app').html(template(data));
})(jQuery);