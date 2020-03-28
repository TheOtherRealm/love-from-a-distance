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
	var gender = ['Female', 'Male', 'Trans'];
	var inpInterests = document.querySelector('input[name="interests"]');
	var inpGender = document.querySelector('input[name="problems"]');
	var interestsFun = boxToFill(inpInterests, interests);
	var interestsProb = boxToFill(inpGender, gender);
//	var obAbVal = $('#objectives,#about');
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
	var pages = {"login": "login.html", "you": "aboutyou.html", "yourlover": "whoyoulove.html"};
	$('#intrestForm').click(function (f) {
		var formPage = $('#login').attr('data-button');
		console.log($(this).attr('data-button'));
		var form = JSON.parse(JSON.stringify($(this).serializeArray()));
		form.push({"name": "form", "value": formPage});
		$.post('../../love-from-afar-ss/love-from-afar-ss.php', form, function (d) {
			console.log(d);
//			$('#results').html(d.interests[0].value);
		}).done(function () {
			location.href = pages[$(this).attr('data-button').value];
		});
		f.preventDefault();
	});
	$('#save').click(function (f) {
		var formPage = $(this).attr('data-button');
		var form = JSON.parse(JSON.stringify($('#intrestForm').serializeArray()));
		formPage = form.value;
		form.push({"name": "form", "value": formPage});
		console.log(f);
		$.post('../../love-from-afar-ss/love-from-afar-ss.php', form, function (d) {
			console.log(d);
		});
		f.preventDefault();
	});

	$('#backB').click(function (f) {
		var formPage = $(this).attr('data-button');
		var form = JSON.parse(JSON.stringify($('#intrestForm').serializeArray()));
		formPage = $('#intrestForm').attr('name');
		form.push({"name": "form", "value": formPage});
		console.log(f);
		$.post('../../love-from-afar-ss/love-from-afar-ss.php', form, function (d) {
			console.log(d);
		});
		window.history.back();
		f.preventDefault();
	});
	$("input[name|='be']").on('ready DOMContentLoaded change', function (d) {
		if ($(this).is('#beyourself:checked')) {
			$('#objectives,#about').show(function () {
				$(this).prop('required', true);
			});
			$("label[for='objectives'],label[for='about']").show();
			console.log($(this));
		}
		if ($(this).is('#bepredesigned:checked')) {
			$('#objectives,#about').hide(function () {
				$(this).prop('required', false);
			});
			$("label[for='objectives'],label[for='about']").hide();
			console.log($(this));
		}
		if ($(this).is('#becreatedbyyou:checked')) {
			$('#objectives,#about').show(function () {
				$(this).prop('required', true);
			});
			$("label[for='objectives'],label[for='about']").show();
			console.log($(this));
		}
		if ($(this).is('#bemultiple:checked')) {
			$('#objectives,#about').show(function () {
				$(this).prop('required', true);
			});
			$("label[for='objectives'],label[for='about']").show();
			console.log($(this));
		}
	});
	function encrypt() {
		var pass = document.getElementById('password').value;
		var hide = document.getElementById('hide').value;
		if (pass === "") {
			document.getElementById('err').innerHTML = 'Error:Password is missing';
			return false;
		} else {
			document.getElementById("hide").value = document.getElementById("password").value;
			var hash = CryptoJS.MD5(pass);
			document.getElementById('password').value = hash;
			return true;
		}
	}
})(jQuery);