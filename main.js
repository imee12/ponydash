if (play_count == 0) {

intro();

}

yes_or_no(); //CLOUDSDALE OR GALA?

if (answer_yes == 1)
{
  answer_yes = 0;
  cloudsdale();
  yes_or_no(); //SPELL OR WINGS?

  if (answer_yes == 1)
  {
    answer_yes = 0;
    begincloudspell();
    yes_or_no(); // REST OR KEEP GOING?

  if (answer_yes == 1)
  {
    answer_yes = 0;
    restcloudsspell();  // END OF CLOUDSDALE SPELL
  } else if (answer_no ==1) {

    answer_no = 0;
    MP3player.playTrack(17);
    yes_or_no(); // KEEP GOING?
    if(answer_yes == 1)
    {
      answer_yes = 0;
      keepraincloudspell(); //END OF CLOUDSDALE SPELL
    } else if (answer_no ==1) {
      //SHUT OFF
      answer_no = 0;
    }
  }
}else if (answer_no == 1){
    MP3player.playTrack(08); // BEGIN CLOUDSDALE/WINGS
    answer_no = 0;
    yes_or_no(); //RARITY'S WINGS??

    if(answer_yes == 1)
    {
      answer_yes = 0;
      cloudswings();
      yes_or_no(); //REST OR KEEP GOING?
      if(answer_yes == 1)
      {
        answer_yes =0;
        restcloudswings();

      }else if(answer_no == 1){
      MP3player.playTrack(17);
      yes_or_no()/ // KEEP GOING?
        if(answer_yes == 1)
        {
        answer_yes = 0;
        gocloudswings();
      }else if(answer_no == 1){
        //SHUT OFF
        answer_no = 0;
      }
      }
    }else if (answer_no == 1) {
      //SHUT OFF
      answer_no = 0;
    }
}
} else if (answer_no ==1){
  MP3player.playTrack(04);
  yes_or_no(); //GALA?
    if(answer_yes = 1)
    {
      answer_yes = 0;
      MP3player.playTrack(35); //BEGIN GALA
      MP3player.playTrack(36);
      yes_or_no(); // DRESS OR BORROW?

      if(answer_yes =1){
        answer_yes = 0;
        galadress();
        MP3player.playTrack(15);
        //add wait function
        MP3player.playTrack(16);
        yes_or_no();  //REST OR KEEP GOING?

        if(answer_yes =1){
          answer_yes = 0;
          restgaladress();
        } else if (answer_no =1){
          answer_no = 0;
          MP3player.playTrack(17);
          yes_or_no(); //KEEP GOING?

          if(answer_yes = 1){
            answer_yes = 0;
            gogaladress();
          }else if (answer_no = 1){
            answer_no = 0;
            //SHUT DOWN
          }
        }
      } else if (answer_no = 1){
        answer_no = 0;
        MP3player.playTrack(37);
        yes_or_no(); // BORROW?
        if(answer_yes= 1){
          answer_yes = 0;
          galaborrow();

          MP3player.playTrack(44);

          yes_or_no(); // CAVE OR FLY
            if(answer_yes =1){
              answer_yes =0;
              galaborrowcave();

            }else if (answer_no = 1){
              answer_no = 0;
            MP3player.playTrack(45);
            yes_or_no(); //Fly?
              if(answer_yes = 1){
                answer_yes = 0;
                galaborrowfly();
              }else if(answer_no = 1){
                answer_no = 0;
                // SHUTOFF
              }
            }

        }else if (answer_no = 1){
          answer_no = 0;
          //SHUTOFF

        }
            }
          }
        }
