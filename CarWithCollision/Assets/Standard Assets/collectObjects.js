#pragma strict

function Start () {

score = 0;

	
}

function Update () {
	
}


var score:int;


function OnControllerColliderHit(hit : ControllerColliderHit)
{
var label:String = hit.collider.gameObject.tag;

	if(hit.collider.tag == "pick_me")
	{
	score = score + 1;
	print("Score:"+score);
		print("Collided with"+ label);
		Destroy(hit.collider.gameObject);
		if(score >= 4) Application.LoadLevel("Scene2");
	}


}
