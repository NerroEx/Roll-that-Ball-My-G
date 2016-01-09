#pragma strict

var playerScore : int;
var prize;
var winScreen: GameObject;

function Update () {}

function OnTriggerEnter(other : Collider)
{
	
	if(other.tag == "prize")
	{
		playerScore++;
		Destroy(other.gameObject);
	}
	
}


function OnCollisionEnter(theCollision : Collision)
{
	if(theCollision.transform.tag == "win")
	{
		winScreen.SetActive(true);
	}	
		
}