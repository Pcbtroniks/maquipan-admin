

function verProductos() {

    var categoria = parent.$("#materia").val();
    var datos = {
        cate: categoria,
    };

    $.ajax({
        url: '/productos/apiver', // URL a la que env�as la solicitud
        type: 'POST',
        data: datos,
        dataType: 'json', // Esperas recibir datos en formato JSON
        success: function (response) {
            parent.$("#tablapreguntas").html("");
            for (var i = 0; i < response.length; i++) {
                var imgpdf = '';
                if (response[i].ficha == "true") {
                    imgpdf = '<img src="/img/icon_pdf.jpg" width="32" />';
                }

                if (response[i].activo == "1") {
                    parent.$("#tablapreguntas").append('<tr><td><span class="badge bg-success">activo</span></td><td><img src="https://maquipan.com.mx/img/productos/' + response[i].id + '/1.jpg" width="20" /></td><td>' + response[i].codigo + '</td><td>' + response[i].nombre + '</td><td>' + imgpdf + '</td><td><a href="/productos/ver/' + response[i].id + '" class="btn btn-icon btn-sm btn-light"><i class="ri-edit-line"></i></a></td></tr>');
                } else {
                    parent.$("#tablapreguntas").append('<tr><td><span class="badge bg-danger">activo</span></td><td><img src="https://maquipan.com.mx/img/productos/' + response[i].id + '/1.jpg" width="20" /></td><td>' + response[i].codigo + '</td><td>' + response[i].nombre + '</td><td>' + imgpdf + '</td><td><a href="/productos/ver/' + response[i].id + '" class="btn btn-icon btn-sm btn-light"><i class="ri-edit-line"></i></a></td></tr>');
                }
            }
        },
        error: function (xhr, status, error) {
            // Manejar errores
            console.error(error);
        }
    });

}