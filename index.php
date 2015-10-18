<!-- -
- Lung Treatment Plan v0.1 
- Author: Azdean Samih
- Mission: Create a simple website that can be used by nurses and doctors to produce a simple
- text free treatment plan to assist patients with poor sight or literacy ability. 
-->

<!DOCTYPE html>
<html>
<head>
	<title>LTP: Lung Treatment Plan</title>
	<link rel="stylesheet" type="text/css" href="./src/style/styles.css">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'></head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<body>
	<header>
		<h1>LTP</h1>
	</header>

	<nav>
	<li id="column-one" data-type='{"type":"A"}'>Column A</li>
	<li id="column-two" data-type='{"type":"B"}'>Column B</li>
	<li id="column-three" data-type='{"type":"C"}'>Column C</li>
	<li id="column-four" data-type='{"type":"D"}'>Column D</li>
	<li id="column-five" data-type='{"type":"E"}'>Column E</li>
	</nav>

	<section class="main">
		<table id="main-table">
			<tr id="table-header">
				<th>Letter</th>
				<th>Morning</th>
				<th>Mid Day</th>
				<th>Evening</th>
				<th>Night</th>
			</tr>


			

		</table>
	</section>


<script src="./src/lib/LTP.js"></script>
</body>
</html>