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
/* global tagify */
(function () {
	var interests = ["Science", "DIY", "Programming", "Inventing"];
	var problems = ['COVID-19'];
	var inpInterests = document.querySelector('input[name="interests"]');
	var inpProblems = document.querySelector('input[name="problems"]');
	var interestsFun = boxToFill(inpInterests, interests);
	var interestsProb = boxToFill(inpProblems, problems);
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
	$('#intrestForm').submit(function (f) {
		var form = JSON.parse(JSON.stringify($(this).serializeArray()));
		console.log(form);
		$.post('../../love-from-afar-ss/love-from-afar-ss.php', form, function (d) {
			console.log(d);
		});
		f.preventDefault();
	});
})(jQuery);