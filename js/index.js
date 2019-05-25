if ($(document).width()>768) {
$('#myModal').on('show.bs.modal', function (event) {
  console.log($(document).width());
  var button = $(event.relatedTarget)
  var modal = $(this)
  modal.find('.modal-title').text(button[0].title)
  var image = modal.find('.modal-body img')
  image.attr("alt", button[0].title);
  image.attr("title", button[0].title);
  image.attr("src", button[0].src);
})
}

$(document).on('click', '.social_share', function(){
    Share.go(this);
});