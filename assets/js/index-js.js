
$(document).ready(function() {
    $('.single-select').select2(); 
});


$(document).ready(function() {
    //Default data table
    $('#default-datatable').DataTable(
        {
            "decimal":        ",",
            "emptyTable":     "aucune donnée disponible",
            "info":           "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
            "infoEmpty":      "Affiche 0 à 0 de 0 entrées",
            "infoFiltered":   "(filtré de _MAX_ Entrées totales)",
            "infoPostFix":    "",
            "thousands":      ".",
            "lengthMenu":     "Afficher _MENU_ entrées",
            "loadingRecords": "Chargement...",
            "processing":     "En traitement...",
            "search":         "Chercher:",
            "zeroRecords":    "Aucun enregistrements correspondants trouvés",
            "paginate": {
                "first":      "Premier",
                "last":       "Dernier",
                "next":       "Suivant",
                "previous":   "Précédent"
            },
            "aria": {
                "sortAscending":  ": Activer pour trier la colonne par ordre croissant",
                "sortDescending": ": Activer pour trier la colonne par ordre décroissant"
            }
        }
    );


    var table = $('#example').DataTable( {
    lengthChange: false,
    buttons: ['excel', 'pdf']
    } );

    table.buttons().container()
    .appendTo( '#example_wrapper .col-md-6:eq(0)' );
     
  } );

