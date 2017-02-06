$(document).ready(function() {
    $('.left.sidebar')
        .sidebar('attach events', '.page-sidebar-toggle')
        .sidebar('setting', 'dimPage', false);
})