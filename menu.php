<!DOCTYPE html>

<html lang="en">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Vertical Accordion Menu</title>
		<link rel="stylesheet" href="Scripts/menu.css" media="screen" charset="utf-8" />
        <!-- on each page include this small script -->
		<script type="text/javascript">
			var sort = "signature"; /* set this var to whichever category product is in - ie. <ul id="signature"> on this page */																				            
        </script>
        <!-- end of sort script -->
		<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="js/menu.js"></script>
	</head>

	<body>
	 
	 	<?php
	 	
	 		require_once('products/menu/menu_prod.php');
	 	
	 	?>
	 
	</body>

</html>
