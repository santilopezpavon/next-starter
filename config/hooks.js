import Config from './index'

module.exports =  {
    basegetserverprops: function (baseProps) {
        // Change Base Props.
       // baseProps["cualquiercosa"] = "hola";
    },
    basegetapibasepath: function (context) {
        return Config.drupal;
    }
}