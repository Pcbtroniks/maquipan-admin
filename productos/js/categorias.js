

function mCategoria1(idCate, stCategoria, nombresubcate) {


	$.ajax({
		url: '/productos/apicategoria',
		type: 'POST',
		data: {
			cate: stCategoria,
		},
		success: function (response) {
            parent.$("#" + idCate).html('');
			var jsonResponse = response;
			if (jsonResponse.length > 0) {
				jsonResponse.forEach(function (item) {
					parent.$("#" + idCate).append('<option value="' + item.nombre + '">' + item.nombre + '</option>');
				});
				parent.$('#' + idCate).val(nombresubcate);

			}
			if (idCate == 'subcate5') {
				setTimeout(function () {
					parent.$('#mBody').preloader('remove');
				}, 1500);
			}
		}
	});
}