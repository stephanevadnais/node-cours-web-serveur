/**
 * Created by Vladsteak on 2017-12-08.
 */



var proprieteCache = function(){

    var statueDuCache = "Vous ne povez rien mettre en cache, non supporté";

    if(window.applicationCache){

        var appliCache = window.applicationCache;

        switch (appliCache.status){

            case appliCache.UNCACHED:
                statueDuCache = " Rien en cache";
                break;
            case appliCache.IDLE:
                statueDuCache = "IDLE";
                break;
            case appliCache.CHECKING:
                statueDuCache = "CHECKING";
                break;
            case appliCache.DOWNLOADING:
                statueDuCache = "Télécargement en cours ...";
                break;
            case appliCache.UPDATEREADY:
                statueDuCache = "Mise à jour prête";
                break;
            case appliCache.OBSOLETE:
                statueDuCache = "Obsolète";
                break;
            default:
                appliCache = "opération inattendu  ( " + appliCache.status.toString() + ")";
                break;



        }


    }

return  statueDuCache;

}