var lang = {
  "decimal": ",",
  "emptyTable": "aucune donnée disponible",
  "info": "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
  "infoEmpty": "Affichage 0 à 0 de 0 Entrées",
  "infoFiltered": "(filtré de _MAX_ Entrées totales)",
  "infoPostFix": "",
  "thousands": ".",
  "lengthMenu": "Afficher _MENU_ entrées",
  "loadingRecords": "Chargement...",
  "processing": "En traitement...",
  "search": "Chercher:",
  "zeroRecords": "Aucun enregistrements correspondants trouvés",
  "paginate": {
    "first": "Premier",
    "last": "Dernier",
    "next": "Suivant",
    "previous": "Précédent"
  },
  "aria": {
    "sortAscending": ": Activer pour trier la colonne par ordre croissant",
    "sortDescending": ": Activer pour trier la colonne par ordre décroissant"
  }
}
$('.default-datatable-plug').DataTable({"autoWidth": false,"language":lang});

var table = $('.default-datatable-pdf-plug').DataTable( {
  lengthChange: false,buttons: [ 'excel', 'pdf' ],"language":lang
});
table.buttons().container().appendTo('.dataTables_wrapper .col-md-6:eq(0)');


