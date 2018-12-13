$(document).ready(function(){
    $("#add").click(function(){
        var name = $("#name").val();
        var surname = $("#surname").val();
        var DOB = $("#DOB").val();
        var markup = "<tr><td><input type='checkbox' name='record'</td><td>" + name + "</td><td>" + surname + "</td><td>" + DOB + "</td></tr>";
        $("table tbody").append(markup);
    });

    // Remove selected table rows
    $("#remove").click(function(){
        $("table tbody").find('input [name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        });
    });
});    