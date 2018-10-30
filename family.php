<?php
	$family = false;

	if(isset($_POST['submit']))
	{
		//execute stuff
		$childName = $_POST['name'];
		$childAge = $_POST['age'];

		$family = [
			[
				'name' => 'John Doe',
				'age' => '50',
				'relation' => 'father'
			],
			[
				'name' => 'Jane Doe',
				'age' => '50',
				'relation' => 'mother'
			],
			[
				'name' => $childName,
				'age' => $childAge,
				'relation' => 'child'
			]
		];
	}
?>
<!DOCTYPE HTML>
<html lang="en-us">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title></title>
		<link rel="stylesheet" type="text/css" href="">
	</head>
	<body>
		<div class="container">
			<header>
				<?php 
					if(!$family)
					{
						//silence
					}else {
						echo "<h1>Family Details:</h1>";
						for($i = count($family) - 1 ; $i >= 0; $i--){
							echo "Name: {$family[$i]['name']}, Age: {$family[$i]['age']}<br>";
						}
					}
				?>
			</header>
			<section id="main" class="main" role="main">
				<form action="./family.php" class="family" method="post">
					<fieldset>
						<label for="name">Child's Name</label>
						<input name="name" type="text" id="name" placeholder="Enter child's name" value="<?php if(isset($name)) echo $name; ?>">
						<label for="age"></label>
						<input name="age" type="text" id="age" placeholder="Enter child's age" value="<?php if(isset($age)) echo $age; ?>">
					</fieldset>
					<button type="submit" name="submit">Submit</button>
				</form>
			</section>
			<footer>

			</footer>
		</div>
	</body>
</html>