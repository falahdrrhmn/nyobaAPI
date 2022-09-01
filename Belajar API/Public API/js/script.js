function tampilkanSemuaMenu(){
    $.getJSON('pizza.json',function(data){
        let menu = data.menu;
    
        $.each(menu, function(i, data){
            $('#daftar-menu').append(' <div class="col-md-4"> <div class=" card mb-4 p-3" > <img src="img/pizza/' + data.gambar + '" class="card-img-top"> <div class="card-body"> <h5 class="card-title">' + data.nama + '</h5> <p class="card-text">'+data.deskripsi+'</p> <h6 class="card-title">'+ data.harga +'</h6> <a href="#" class=" btn btn-primary ">Detail</a> </div> </div> </div> ')
        });
    });
}
tampilkanSemuaMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('kaku');
    $(this).addClass('kaku');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All menu'){
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('pizza.json', function (data) {
        let menu = data.menu;
        let content = '';
        $.each(menu, function(i, data){
            if(data.kategori == kategori.toLowerCase()){
                content += '<div class="col-md-4"> <div class=" card mb-4 p-3" style="width: 18rem;"> <img src="img/pizza/' + data.gambar + '" class="card-img-top"> <div class="card-body"> <h5 class="card-title">' + data.nama + '</h5> <p class="card-text">'+data.deskripsi+'</p> <h6 class="card-title">'+ data.harga +'</h6> <a href="#" class=" btn btn-primary ">Detail</a> </div> </div> </div>'; 
            }   
        });
        $('#daftar-menu').html(content);
    });
});
