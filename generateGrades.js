 
  (function() {
    var MathF   = document.getElementById('MathF'),
		Math2   = document.getElementById('Math2'),
		Math1   = document.getElementById('Math1'),
		Math   = document.getElementById('Math'),
        
		EnglishF = document.getElementById('EnglishF'),
		English2  = document.getElementById('English2'),
		English1   = document.getElementById('English1'),
		English   = document.getElementById('English'),
		
		ScienceF   = document.getElementById('ScienceF'),
		Science2   = document.getElementById('Science2'),
		Science1   = document.getElementById('Science1'),
		Science   = document.getElementById('Science'),				
					
		HistoryF   = document.getElementById('HistoryF'),
		History2   = document.getElementById('History2'),
		History1   = document.getElementById('History1'),
		History   = document.getElementById('History'),
		
		EconomicsF   = document.getElementById('EconomicsF'),
		Economics2   = document.getElementById('Economics2'),
		Economics1   = document.getElementById('Economics1'),
		Economics   = document.getElementById('Economics'),
		
		LiteratureF   = document.getElementById('LiteratureF'),
		Literature2   = document.getElementById('Literature2'),
		Literature1   = document.getElementById('Literature1'),
		Literature   = document.getElementById('Literature'),
		
		MusicF   = document.getElementById('MusicF'),
		Music2   = document.getElementById('Music2'),
		Music1   = document.getElementById('Music1'),
		Music   = document.getElementById('Music'),
		
		PEF   = document.getElementById('PEF'),
		PE2   = document.getElementById('PE2'),
		PE1   = document.getElementById('PE1'),
		PE   = document.getElementById('PE'),
	
        
		callback = function () {
            MathF.value = ((Math.value)*1+(Math1.value)*1+(Math2.value)*1)/3;
			if ((Math.value == "")&&(Math1.value == "")&&(Math2.value == "")){
				MathF.value = " ";
			}else if(MathF.value >= 90 && MathF.value <= 100){
				MathF.value = "A";
			}else if (MathF.value >= 80 && MathF.value <= 89){
				MathF.value = "B+";
			}else if (MathF.value >= 70 && MathF.value <= 79){
				MathF.value = "B";
			}else if (MathF.value >= 60 && MathF.value <= 69){
				MathF.value = "C+";
			}else if (MathF.value >= 50 && MathF.value <= 59){
				MathF.value = "C";
			}else if (MathF.value >= 0 && MathF.value <=49){
				MathF.value = "D";
			}else if (MathF.value > 100){
				MathF.value = "Error";
			}
			
			EnglishF.value = ((English.value)*1+(English1.value)*1+(English2.value)*1)/3;
			if ((English.value == "")&&(English1.value == "")&&(English2.value == "")){
				EnglishF.value = " ";
			}else if(EnglishF.value >=90 && EnglishF.value <= 100){
				EnglishF.value = "A";
			}else if (EnglishF.value >= 80 && EnglishF.value <= 89){
				EnglishF.value = "B+";
			}else if (EnglishF.value >= 70 && EnglishF.value <= 79){
				EnglishF.value = "B";
			}else if (EnglishF.value >= 60 && EnglishF.value <= 69){
				EnglishF.value = "C+";
			}else if (EnglishF.value >= 50 && EnglishF.value <= 59){
				EnglishF.value = "C";
			}else if (EnglishF.value >= 0 && EnglishF.value <=49){
				EnglishF.value = "D";
			}else if (EnglishF.value > 100){
				EnglishF.value = "Error";
			}
			
			ScienceF.value = ((Science.value)*1+(Science1.value)*1+(Science2.value)*1)/3;
			if ((Science.value == "")&&(Science1.value == "")&&(Science2.value == "")){
				ScienceF.value = " ";
			}else if(ScienceF.value >=90 && ScienceF.value <= 100){
				ScienceF.value = "A";
			}else if (ScienceF.value >= 80 && ScienceF.value <= 89){
				ScienceF.value = "B+";
			}else if (ScienceF.value >= 70 && ScienceF.value <= 79){
				ScienceF.value = "B";
			}else if (ScienceF.value >= 60 && ScienceF.value <= 69){
				ScienceF.value = "C+";
			}else if (ScienceF.value >= 50 && ScienceF.value <= 59){
				ScienceF.value = "C";
			}else if (ScienceF.value >= 0 && ScienceF.value <=49){
				ScienceF.value = "D";
			}else if (ScienceF.value > 100){
				ScienceF.value = "Error";
			}
			
			HistoryF.value = ((History.value)*1+(History1.value)*1+(History2.value)*1)/3;
			if ((History.value == "")&&(History1.value == "")&&(History2.value == "")){
				HistoryF.value = " ";
			}else if(HistoryF.value >=90 && HistoryF.value <= 100){
				HistoryF.value = "A";
			}else if (HistoryF.value >= 80 && HistoryF.value <= 89){
				HistoryF.value = "B+";
			}else if (HistoryF.value >= 70 && HistoryF.value <= 79){
				HistoryF.value = "B";
			}else if (HistoryF.value >= 60 && HistoryF.value <= 69){
				HistoryF.value = "C+";
			}else if (HistoryF.value >= 50 && HistoryF.value <= 59){
				HistoryF.value = "C";
			}else if (HistoryF.value >= 0 && HistoryF.value <=49){
				HistoryF.value = "D";
			}else if (HistoryF.value > 100){
				HistoryF.value = "Error";
			}
			
			EconomicsF.value = ((Economics.value)*1+(Economics1.value)*1+(Economics2.value)*1)/3;
			if ((Economics.value == "")&&(Economics1.value == "")&&(Economics2.value == "")){
				EconomicsF.value = " ";
			}else if(EconomicsF.value >=90 && EconomicsF.value <= 100){
				EconomicsF.value = "A";
			}else if (EconomicsF.value >= 80 && EconomicsF.value <= 89){
				EconomicsF.value = "B+";
			}else if (EconomicsF.value >= 70 && EconomicsF.value <= 79){
				EconomicsF.value = "B";
			}else if (EconomicsF.value >= 60 && EconomicsF.value <= 69){
				EconomicsF.value = "C+";
			}else if (EconomicsF.value >= 50 && EconomicsF.value <= 59){
				EconomicsF.value = "C";
			}else if (EconomicsF.value >= 0 && EconomicsF.value <=49){
				EconomicsF.value = "D";
			}else if (EconomicsF.value > 100){
				EconomicsF.value = "Error";
			}
			
			LiteratureF.value = ((Literature.value)*1+(Literature1.value)*1+(Literature2.value)*1)/3;
			if ((Literature.value == "")&&(Literature1.value == "")&&(Literature2.value == "")){
				LiteratureF.value = " ";
			}else if(LiteratureF.value >=90 && LiteratureF.value <= 100){
				LiteratureF.value = "A";
			}else if (LiteratureF.value >= 80 && LiteratureF.value <= 89){
				LiteratureF.value = "B+";
			}else if (LiteratureF.value >= 70 && LiteratureF.value <= 79){
				LiteratureF.value = "B";
			}else if (LiteratureF.value >= 60 && LiteratureF.value <= 69){
				LiteratureF.value = "C+";
			}else if (LiteratureF.value >= 50 && LiteratureF.value <= 59){
				LiteratureF.value = "C";
			}else if (LiteratureF.value >= 0 && LiteratureF.value <=49){
				LiteratureF.value = "D";
			}else if (LiteratureF.value > 100){
				LiteratureF.value = "Error";
			}
			
			MusicF.value = ((Music.value)*1+(Music1.value)*1+(Music2.value)*1)/3;
			if ((Music.value == "")&&(Music1.value == "")&&(Music2.value == "")){
				MusicF.value = " ";
			}else if(MusicF.value >=90 && MusicF.value <= 100){
				MusicF.value = "A";
			}else if (MusicF.value >= 80 && MusicF.value <= 89){
				MusicF.value = "B+";
			}else if (MusicF.value >= 70 && MusicF.value <= 79){
				MusicF.value = "B";
			}else if (MusicF.value >= 60 && MusicF.value <= 69){
				MusicF.value = "C+";
			}else if (MusicF.value >= 50 && MusicF.value <= 59){
				MusicF.value = "C";
			}else if (MusicF.value >= 0 && MusicF.value <=49){
				MusicF.value = "D";
			}else if (MusicF.value > 100){
				MusicF.value = "Error";
			}
			
			PEF.value = ((PE.value)*1+(PE1.value)*1+(PE2.value)*1)/3;
			if ((PE.value == "")&&(PE1.value == "")&&(PE2.value == "")){
				PEF.value = " ";
			}else if(PEF.value >=90 && PEF.value <= 100){
				PEF.value = "A";
			}else if (PEF.value >= 80 && PEF.value <= 89){
				PEF.value = "B+";
			}else if (PEF.value >= 70 && PEF.value <= 79){
				PEF.value = "B";
			}else if (PEF.value >= 60 && PEF.value <= 69){
				PEF.value = "C+";
			}else if (PEF.value >= 50 && PEF.value <= 59){
				PEF.value = "C";
			}else if (PEF.value >= 0 && PEF.value <=49){
				PEF.value = "D";
			}else if (PEF.value > 100){
				PEF.value = "Error";
			}			
		
         };
        
   
        Math.addEventListener('keyup', callback);
		Math2.addEventListener('keyup', callback);
		Math1.addEventListener('keyup', callback);

        English.addEventListener('keyup', callback);
		English2.addEventListener('keyup', callback);
		English1.addEventListener('keyup', callback);
		
		Science.addEventListener('keyup', callback);
		Science2.addEventListener('keyup', callback);
		Science1.addEventListener('keyup', callback);

		History.addEventListener('keyup', callback);
		History2.addEventListener('keyup', callback);
		History1.addEventListener('keyup', callback);
	
        Economics.addEventListener('keyup', callback);
		Economics2.addEventListener('keyup', callback);
		Economics1.addEventListener('keyup', callback);
	
			
		Literature.addEventListener('keyup', callback);
		Literature2.addEventListener('keyup', callback);
		Literature1.addEventListener('keyup', callback);
	
		
		Music.addEventListener('keyup', callback);
		Music2.addEventListener('keyup', callback);
		Music1.addEventListener('keyup', callback);
		
		PE.addEventListener('keyup', callback);
		PE2.addEventListener('keyup', callback);
		PE1.addEventListener('keyup', callback);
		
    
}());