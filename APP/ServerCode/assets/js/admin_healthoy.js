var adminMenuArray = [{
    group: "Manage Videos",
    items: ["Add Video"], //, "Remove Teacher"
    fnct: ["add_video"] //, "Remove Teacher"
}, {
    group: "Manage Notifications",
    items: ["Manage Notifications", "Analytics"], //"Assign Groups",
    fnct: ["manage_notifications", "Analytics_notifications"] //, "Assign Groups"
}];
var student_links = new Array();
var imageSelected = "";

function bodyLoaded() {
    var bug_Test = false;
    if (bug_Test == true) {
        showLoggedInPage()
    } else {
        showLogin();
    }
}

function showLogin() {
    if (($.cookie('oamk_admin_userinfo') != null)) {
        userLoginJsn = JSON.parse($.cookie('oamk_admin_userinfo'));
        setUserToLoggedin(userLoginJsn.oamk_userid, userLoginJsn.oamk_username, userLoginJsn.oamk_useraccesstoken);
    } else {
        $('#login-page').show();
        $('#logged-in-page').hide();
        adminFunctions();
    }
}

function adminFunctions() {

    $(document).on("click", "#sign_in", function() {
        doLogin();
    });
    $(document).on("click", "#log_out", function() {
        doLogOut();
    });
}

function doLogin() {
    var username = $('#user_name').val();
    var password = $('#password').val();
    if (username != "" && password != "") {
        userLoginFunction(username, password);
    } else {
        showPop("Invalid", "Enter proper username/password.");
    }
}

function doLogOut() {
    setUserToLoggedOut();
    //showLogin();
}

function showLoggedInPage() {
    $('#login-page').hide();
    $('#logged-in-page').show();
    var content = "";
    for (var count = 0; count < adminMenuArray.length; count++) {
        content += '<div class="MainMenu">' + adminMenuArray[count]["group"] + '</div>';
        $.each(adminMenuArray[count]["items"], function(key, value) {
            content += '<div class="SubMenu"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a ref_id="' + adminMenuArray[count]["fnct"][key] + '" >' + value + '</a></div>';
        });
    }
    $("#menu_content").html(content);
    $(document).on("click", ".SubMenu a", function() {
        $(".SubMenu a").removeClass("active");
        $(this).addClass("active");
        showContent($(this).attr("ref_id"));
    });
}

function showContent(ref_id) {
    $('.contentArea .container').hide();
    //if(ref_id='add_teacher'){
    $('#' + ref_id).show();
    switch (ref_id) {
        case "add_video":
            ManageVideo();
            break;
        default:
    }
}


function ManageVideo() {
    $('#add_videos').show();

    getOldVideos();
    $(document).on("click", "#create_new_video_save", function() {
        saveVideo();
    });
}


function getOldVideos() {
    showLoading();
    var request = getRequestObject({}, "GETOLDVIDEOS");
    $.post(SERVER_URL, request, function(result) {
        stopLoading();
        if (result.RESULT == "SUCCESS") {
            $('#old_videos_list').show();
            $('#old_videos_table').show();
            fillVideoTable(result.DATA);
        } else {}
    }, "json");
}

function fillVideoTable(data) {
    $('#old_videos_line').empty()
    for (counter = 0; counter < data.length; counter++) {
        var newRow = $('<tr style="font-size:11px">');
        var cols = "";
        cols += '<td>' + (counter + 1) + '</td>';
        cols += '<td>' + data[counter]["video_title"] + '</td>';

        cols += '<td>' + data[counter]["video_url"] + '</td>';
        cols += '<td>' + data[counter]["video_category"] + '</td>';

        cols += '</tr>';
        newRow.append(cols);
        $('#old_videos_line').append(newRow);
    }
    var oTable = $("#old_videos_table").dataTable({
        "bSort": true,
        "bRetrieve": true,
        "bProcessing": true,
        "bDestroy": true
    });
    $('#old_videos_table').show();
}


function saveVideo() {
    var video_title = $('#video_title').val();
    var video_url = $('#video_url').val();
    var video_desc = $('#video_desc').val();
    var video_cat = $('#video_cat').val();
    var video_tag = $('#video_tag').val();

    if (video_title.length < 3 && video_url < 1) {
        showPop("Failed", "Please provide correct Information.");
    } else {
        showLoading();
        var request = getRequestObject({
            video_title: video_title,
            video_url: video_url,
            video_desc: video_desc,
            video_cat: video_cat,
            video_tag: video_tag
        }, "SAVEVIDEO");
        $.post(SERVER_URL, request, function(result) {
            stopLoading();
            if (result.RESULT == "SUCCESS") {
                getOldVideos();
                showPop("New Workout Sechdule Created", "A new Workout Sechdule with name " + video_title + " has been created.");
            } else {
                showPop("Failed", "Please try again!");
            }
        }, "json");
    }
}

function showLoading() {
    $('.loading').show();
}

function stopLoading() {
    $('.loading').fadeOut("slow");
}
function showPop(title, body) {
	$('#alert_popup_title').html(title);
	$('#alert_popup_content').html(body);
	$('#alert_popup').modal();
}
