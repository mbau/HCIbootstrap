$(document).ready(function() {
	$('#set_schedule').click(function() {
        var toAddOrigin = $('input[name=origin]').val();
        $('.origin_viewer').replaceWith('<td class="origin_viewer">' + toAddOrigin + '</td>');
        var toAddDestination = $('input[name=destination]').val();
        $('.destination_viewer').replaceWith('<td class="destination_viewer">' + toAddDestination + '</td>');

        var toAddDate = $('input[name=date]').val();
        $('#table_name').replaceWith('<h3 id="table_name">Buses Traveling on ' + toAddDate + '</h3>');

        $('#depart_time_viewer1').replaceWith('<td id="depart_time_viewer1">4:10 AM</td>');
        $('#arrive_time_viewer1').replaceWith('<td id="arrive_time_viewer1">6:30 AM</td>');

        $('#depart_time_viewer2').replaceWith('<td id="depart_time_viewer2">6:10 AM</td>');
        $('#arrive_time_viewer2').replaceWith('<td id="arrive_time_viewer2">8:30 AM</td>');

        $('#depart_time_viewer3').replaceWith('<td id="depart_time_viewer3">8:10 AM</td>');
        $('#arrive_time_viewer3').replaceWith('<td id="arrive_time_viewer3">10:30 AM</td>');

        $('#depart_time_viewer4').replaceWith('<td id="depart_time_viewer4">10:10 AM</td>');
        $('#arrive_time_viewer4').replaceWith('<td id="arrive_time_viewer4">12:30 PM</td>');

        $('#depart_time_viewer5').replaceWith('<td id="depart_time_viewer5">2:10 PM</td>');
        $('#arrive_time_viewer5').replaceWith('<td id="arrive_time_viewer5">4:30 PM</td>');

        $('#depart_time_viewer6').replaceWith('<td id="depart_time_viewer6">4:10 PM</td>');
        $('#arrive_time_viewer6').replaceWith('<td id="arrive_time_viewer6">6:10 PM</td>');

    });
	
	$('#buy_button').click(function() {
        var origin = $('input[name=origin]').val();
        var destination = $('input[name=destination]').val();
        var date = $('input[name=date]').val();	
				var url = "checkout.html?origin=" +origin+ "&destination=" +destination+ "&date=" +date;
        myWindow = window.open(url, '_blank');
	});
});