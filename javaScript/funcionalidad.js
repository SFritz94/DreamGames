$(function(){

    function buscar_productos() {
        console.log("BUSCANDO PRODUCTOS");

        $.ajax({
            url: 'https://my-json-server.typicode.com/SantiagoFritzIstea/Api_Rest_DreamGames/productos',
            type: 'GET',
            dataType: 'json',

            success: function(data){ // Funcion de callback
                console.log("RESPUESTA OK");
                console.log(data);

                //Inicio: cargando imagenes de los carouseles
                for(productos of data){
                    if(productos.categoria === "Aventura"){
                        for(juegos of productos.juegos){
                            if(juegos.id===1){
                                $("#imgCarousel").attr("src", juegos.urlImagen);
                            }
                            if(juegos.id===2){
                                let contenedorImagen = $("#ContenedorImagen").clone();
                                contenedorImagen.removeClass("active");
                                let imagenCarousel = $("#imgCarousel");
                                imagenCarousel.attr("src", juegos.urlImagen);
                                $("#ContenedorImagenes").append(contenedorImagen);
                            }
                        }
                    }
                    if(productos.categoria === "Terror"){
                        for(juegos of productos.juegos){
                            if(juegos.id===1){
                                let contenedorImagen = $("#ContenedorImagen").clone();
                                contenedorImagen.removeClass("active");
                                let imagenCarousel = $("#imgCarousel");
                                imagenCarousel.attr("src", juegos.urlImagen);
                                $("#ContenedorImagenes").append(contenedorImagen);
                            }
                            if(juegos.id===2){
                                let contenedorImagen = $("#ContenedorImagen").clone();
                                contenedorImagen.removeClass("active");
                                let imagenCarousel = $("#imgCarousel");
                                imagenCarousel.attr("src", juegos.urlImagen);
                                $("#ContenedorImagenes").append(contenedorImagen);
                            }
                        }
                    }
                    if(productos.categoria === "Estrategia"){
                        for(juegos of productos.juegos){
                            if(juegos.id===1){
                                let contenedorImagen = $("#ContenedorImagen").clone();
                                contenedorImagen.removeClass("active");
                                let imagenCarousel = $("#imgCarousel");
                                imagenCarousel.attr("src", juegos.urlImagen);
                                $("#ContenedorImagenes").append(contenedorImagen);
                            }
                            if(juegos.id===2){
                                let contenedorImagen = $("#ContenedorImagen").clone();
                                contenedorImagen.removeClass("active");
                                let imagenCarousel = $("#imgCarousel");
                                imagenCarousel.attr("src", juegos.urlImagen);
                                $("#ContenedorImagenes").append(contenedorImagen);
                            }
                        }
                    }
                }//Fin: cargando imagenes de los carouseles
                $("#loader").hide();
                $("#carousel").show();
            },

            error: function(request, error) {
                console.log("Ocurrio un error: " + error);
            }
        });
    }

    buscar_productos();

    $("#producto1").hide();
    $("#producto2").hide();
    $("#carousel").hide();

    //Tomo la imagen de los carouseles para agregarlos a los juegos de las categorias.
    $("#categoriaAventuraBtn").on('click', function(){
        
        $("#producto1Img").removeClass("img-thumbnail");
        $("#producto2Img").removeClass("img-thumbnail");
        $("#producto1Img").attr("src", "images/loader.gif");
        $("#producto2Img").attr("src", "images/loader.gif");

        $.ajax({
            url: 'https://my-json-server.typicode.com/SantiagoFritzIstea/Api_Rest_DreamGames/productos',
            type: 'GET',
            dataType: 'json',

            success: function(data){ // Funcion de callback
                
                for(productos of data){
                    if(productos.categoria === "Aventura"){
                        for(juegos of productos.juegos){
                            if(juegos.id===1){
                                $("#producto1Img").addClass("img-thumbnail");
                                $("#producto1Img").attr("src", juegos.urlImagen);
                                $("#nombre1").text(`Nombre: ${juegos.nombre}`);
                                $("#descripcion1").text(`Descripción: ${juegos.descripcion}`);
                                $("#precio1").text(`Precio: $${juegos.precio}`);
                                $("#fechaPublicacion1").text(`Fecha de Publicacion: ${juegos.fechaPublicacion}`);
                                $("#cantidadDisponible1").text(`Cantidad Disponible: ${juegos.cantidadDisponible}`);
                            }
                            if(juegos.id===2){
                                $("#producto2Img").addClass("img-thumbnail");
                                $("#producto2Img").attr("src", juegos.urlImagen);
                                $("#nombre2").text(`Nombre: ${juegos.nombre}`);
                                $("#descripcion2").text(`Descripción: ${juegos.descripcion}`);
                                $("#precio2").text(`Precio: $${juegos.precio}`);
                                $("#fechaPublicacion2").text(`Fecha de Publicacion: ${juegos.fechaPublicacion}`);
                                $("#cantidadDisponible2").text(`Cantidad Disponible: ${juegos.cantidadDisponible}`);
                            }
                        }
                    }
                }
            },

            error: function(request, error) {
                console.log("Ocurrio un error: " + error);
            }
        });

        $("#producto1").show();
        $("#producto2").show();
    })

    $("#categoriaTerrorBtn").on('click', function(){
        
        $("#producto1Img").removeClass("img-thumbnail");
        $("#producto2Img").removeClass("img-thumbnail");
        $("#producto1Img").attr("src", "images/loader.gif");
        $("#producto2Img").attr("src", "images/loader.gif");

        $.ajax({
            url: 'https://my-json-server.typicode.com/SantiagoFritzIstea/Api_Rest_DreamGames/productos',
            type: 'GET',
            dataType: 'json',

            success: function(data){ // Funcion de callback
                                
                for(productos of data){
                    if(productos.categoria === "Terror"){
                        for(juegos of productos.juegos){
                            if(juegos.id===1){
                                $("#producto1Img").addClass("img-thumbnail");
                                $("#producto1Img").attr("src", juegos.urlImagen);
                                $("#nombre1").text(`Nombre: ${juegos.nombre}`);
                                $("#descripcion1").text(`Descripción: ${juegos.descripcion}`);
                                $("#precio1").text(`Precio: $${juegos.precio}`);
                                $("#fechaPublicacion1").text(`Fecha de Publicacion: ${juegos.fechaPublicacion}`);
                                $("#cantidadDisponible1").text(`Cantidad Disponible: ${juegos.cantidadDisponible}`);
                            }
                            if(juegos.id===2){
                                $("#producto2Img").addClass("img-thumbnail");
                                $("#producto2Img").attr("src", juegos.urlImagen);
                                $("#nombre2").text(`Nombre: ${juegos.nombre}`);
                                $("#descripcion2").text(`Descripción: ${juegos.descripcion}`);
                                $("#precio2").text(`Precio: $${juegos.precio}`);
                                $("#fechaPublicacion2").text(`Fecha de Publicacion: ${juegos.fechaPublicacion}`);
                                $("#cantidadDisponible2").text(`Cantidad Disponible: ${juegos.cantidadDisponible}`);
                            }
                        }
                    }
                }
            },

            error: function(request, error) {
                console.log("Ocurrio un error: " + error);
            }
        });
        
        $("#producto1").show();
        $("#producto2").show();
    })

    $("#categoriaEstrategiaBtn").on('click', function(){
        
        $("#producto1Img").removeClass("img-thumbnail");
        $("#producto2Img").removeClass("img-thumbnail");
        $("#producto1Img").attr("src", "images/loader.gif");
        $("#producto2Img").attr("src", "images/loader.gif");

        $.ajax({
            url: 'https://my-json-server.typicode.com/SantiagoFritzIstea/Api_Rest_DreamGames/productos',
            type: 'GET',
            dataType: 'json',

            success: function(data){ // Funcion de callback
                                
                for(productos of data){
                    if(productos.categoria === "Estrategia"){
                        for(juegos of productos.juegos){
                            if(juegos.id===1){
                                $("#producto1Img").addClass("img-thumbnail");
                                $("#producto1Img").attr("src", juegos.urlImagen);
                                $("#nombre1").text(`Nombre: ${juegos.nombre}`);
                                $("#descripcion1").text(`Descripción: ${juegos.descripcion}`);
                                $("#precio1").text(`Precio: $${juegos.precio}`);
                                $("#fechaPublicacion1").text(`Fecha de Publicacion: ${juegos.fechaPublicacion}`);
                                $("#cantidadDisponible1").text(`Cantidad Disponible: ${juegos.cantidadDisponible}`);
                            }
                            if(juegos.id===2){
                                $("#producto2Img").addClass("img-thumbnail");
                                $("#producto2Img").attr("src", juegos.urlImagen);
                                $("#nombre2").text(`Nombre: ${juegos.nombre}`);
                                $("#descripcion2").text(`Descripción: ${juegos.descripcion}`);
                                $("#precio2").text(`Precio: $${juegos.precio}`);
                                $("#fechaPublicacion2").text(`Fecha de Publicacion: ${juegos.fechaPublicacion}`);
                                $("#cantidadDisponible2").text(`Cantidad Disponible: ${juegos.cantidadDisponible}`);
                            }
                        }
                    }
                }
            },

            error: function(request, error) {
                console.log("Ocurrio un error: " + error);
            }
        });

        $("#producto1").show();
        $("#producto2").show();
    })
});