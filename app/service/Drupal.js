import Config from '../../config/index'
const axios = require('axios');


module.exports =  {
    getData: async function(alias) {        
        try {
            //console.time('aliasString');
            const aliasString = Array.isArray(alias) ? `/${alias.join('/')}/` : alias; 
            //console.timeEnd('aliasString');

            //console.time('getNodeByAlias');
            let dataNode = await this.getNodeByAlias(aliasString);
            //console.timeEnd('getNodeByAlias');

           // console.time('pathComponent');
            let pathComponent = this.getComponent(dataNode); 
           // console.timeEnd('pathComponent');           

            return {
                "data": dataNode,
                "pathComponent": pathComponent,
            }; 
        } catch (error) {
            return {
                "data": {},
                "pathComponent": "page-404",
                "metatags": {
                    title: "Error 404",
                    description: ""
                }
            }
        }        
    },

    getEntity: async function (entity_type, id_entity, display_content = 'default') {
        const drupalBase = Config.drupal;
        const apiEndPoint = drupalBase + "api/" + entity_type + "/get/" + id_entity;        
        const body = {
            "schema": {"display": display_content},
        };
        try {
            const response = await axios.post(apiEndPoint, body);
            return response.data;
        } catch (error) {
            return error.message; 
        }  

       /* try {
            const response = await fetch("http://perfomance.ddev.site/sites/default/files/builder/test.json");
            const data = await response.json();
            return data;
        } catch (error) {
            return error.message; 
        }  */

        /**
         * 
         * try {
            const response = await fetch("http://perfomance.ddev.site/sites/default/files/builder/test.json");
            const data = await response.json();
            return data;
        } catch (error) {
            return error.message; 
        }  
         */
    },

    getView: function (id_view, id_display_view, display_content = 'default') {

    },

    getNodeByAlias: async function(aliasString, theme = null) {
        const drupalBase = Config.drupal;
        const apiEndPoint = drupalBase + "api/node/alias";        
        const body = {
            "schema": {"display": "default"},
            "alias": aliasString
        };
        try {
            const response = await axios.post(apiEndPoint, body);
            return response.data;
        } catch (error) {
            return error.message; 
        }              
    },
    getComponent(data) {
        let currentData = this.getNodeInfo(data);
        return this.convertString(currentData.type[0].target_type) + "" + this.convertString(currentData.type[0].target_id);
    },

    getNodeInfo(data) {
        const currentData = data.data['Content'] ? data.data['Content'] : data.data;
        return currentData;
    }, 
    convertString(text) {
        return text[0].toUpperCase() + text.slice(1).replace(/_/g, '');
    }  
}