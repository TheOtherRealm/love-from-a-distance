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
Vue.component('be', {
	props: ['tobe','bee'],
	template: '<div><input type="radio" :id="tobe.id" name="be" :value="tobe.id" required> <label :for="tobe.id">{{tobe.text}}</label></div>'
});
var app = new Vue({
	el: '#app',
	data() {
		return {
			title: "Love From Afar",
			be: [
				{ id: 'yourself', text: "Yourself", value: this.id },
				{ id: 'predesigned', text: "Predesigned", value: this.id },
				{ id: 'createdbyyou', text: "Created by you", value: this.id },
				{ id: 'multiple', text: "Multiple", value: this.id }
			]
		}
	}
});
(function ($) {
	$('input').change(function (d) {
		console.log($(this).val());
	});
})(jQuery);