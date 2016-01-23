<!-- -
- Lung Treatment Plan v0.1
- Author: Azdean Samih
- Mission: Create a simple website that can be used by nurses and doctors to produce a simple
- text free treatment plan to assist patients with poor sight or literacy ability.
-->

<?php
	include 'src/framework/header.php';
?>

<body>
	<header>
		<h1>LTP</h1>
	</header>

	<nav>
		<li id="add-btn">+</li>
	</nav>

	<section id="config">
		<div class="wrapper">
			<section id="config-colour" class="config-window"></section>
			<section id="config-shape" class="config-window"></section>
			<button id="config-submit">Add</button>
		</div>
	</section>

	<section class="main">
		<table id="main-table">
			<tr id="table-header">
				<th>Inhaler</th>
				<th>Morning</th>
				<th>Mid Day</th>
				<th>Evening</th>
				<th>Night</th>
			</tr>
		</table>
	</section>

<script src="./src/lib/options.js"></script>
<script src="./src/lib/ui.js"></script>
<script src="./src/lib/LTP.js"></script>
</body>

<?php
	include 'src/framework/footer.php';
?>
