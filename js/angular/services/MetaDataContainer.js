app.service('MetaDataContainer', ['UserId',  function(UserId) {
    this.data = [
    /*{
        label:"Advance Search",
        value:"AdvanceSearch",
        isSearchable:false,
        url:"https://"+window.location.host,
        menuname:"favourite",
        objectlevelaction:[
                               {name:"setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
                               {name:"console", actionUrl:"/_ui/common/apex/debug/ApexCSIPage"},
                               {name:"tce", actionUrl:"/ui/setup/apex/ApexTestQueuePage"},
                               {name:"jobs", actionUrl:"/08e"}
                           ]
    },*/
    {
        label:"View As",
        tooltipMessage:"View all users on salesforce",
        value:"ChangeUser",
        dataNotAvailableMessage:"Please click on view as to change user(No login required).",
        formainmenu:true,
        isSearchable:true,
        visibleForMetadataMenu:true,
        queryForAll:"select id, name, email, username from User where user.IsActive = true order by LastModifiedDate desc",
        queryForAllWithWhere:"select id, Name, username, email from User where user.IsActive = true and name like ",
        imagesrc : chrome.extension.getURL("/img/icons/viewas.png"),
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        placeholderText:"Search user...",
        type:"table",
        listUrl:"/005",
        midurl:"",
        eligibleForPackageXml:false,
        fieldlevelactions:[
                {name:"ChangeUser"}
                ],
        objectlevelaction:[
            {name:"setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"Developer Console", actionUrl:"/_ui/common/apex/debug/ApexCSIPage"}
            
            ]
    },{
        label:"Recently viewed",
        isSearchable:true,
        formainmenu:true,
        tooltipMessage:"Open home page",
        EligibleForAdvanceSearch:true,
        visibleForMetadataMenu:true,
        dataNotAvailableMessage:"You have not viewed any data in logged in org.",
        value:"RecentlyViewed",
        metadata:"RecentlyViewed",
        type:"table",
        listUrl:"/",
        menuname:"favourite",
        eligibleForPackageXml:false,
        query:"SELECT Id, Name, Type FROM RecentlyViewed WHERE Type IN ('User', 'Account', 'Contact', 'Contract', 'Campaign', 'Lead', 'Opportunity', 'Case', 'Order', 'Quote', 'CustomLabel', 'CustomLabels', 'CustomObject', 'CustomTab', 'Dashboard', 'Document', 'EmailTemplate', 'Flow', 'Group', 'Package', 'PermissionSet', 'Profile', 'Queue', 'RemoteSiteSetting', 'Report', 'Role', 'SharingRules', 'WebLink', 'Workflow') ORDER BY LastViewedDate DESC",
        headers:["Log Size(byte)", "Operation", "Start Time"],
        objectlevelaction:[
            {name:"setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"Developer Console", actionUrl:"/_ui/common/apex/debug/ApexCSIPage"}
            
            ],
        url:"https://"+window.location.host+"/services/data/v43.0/tooling/query/?q=",
        fieldlevelactions:[{}],
        midurl:"",
        placeholderText:"Quick Search"
    },{
        label:"Campaigns",
        value:"Campaign",
        tooltipMessage:"View all campaign on salesforce",
        isSearchable:true,
        formainmenu:true,
        isAdminComponent:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any campaign.",
        queryForAll:"SELECT Id, Name, LastModifiedBy.name FROM Campaign order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, Name, LastModifiedBy.name FROM Campaign where Name like ",
        query:"SELECT Id, Name, LastModifiedBy.name FROM Campaign where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Campaign",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        midurl:"",
        fieldlevelactions:[{name:"ViewEye"}, {name:"Edit", actionUrl:"/e"}],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/701/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/701/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Leads",
        value:"Lead",
        tooltipMessage:"View all lead on salesforce",
        isSearchable:true,
        isAdminComponent:true,
        formainmenu:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any lead.",
        queryForAll:"SELECT Id, Name, LastModifiedBy.name FROM Lead order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, Name, LastModifiedBy.name FROM Lead where Name like ",
        query:"SELECT Id, Name, LastModifiedBy.name FROM Lead where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Lead",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        midurl:"",
        fieldlevelactions:[{name:"ViewEye"}, {name:"Edit", actionUrl:"/e"}],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/00Q/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/00Q/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Accounts",
        value:"Account",
        tooltipMessage:"View all accounts on salesforce",
        isSearchable:true,
        EligibleForAdvanceSearch:true,
        isAdminComponent:true,
        formainmenu:true,
        dataNotAvailableMessage:"You have not created/modified any accounts.",
        queryForAll:"SELECT Id, Name, LastModifiedBy.name FROM Account order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, Name, LastModifiedBy.name FROM Account where Name like ",
        query:"SELECT Id, Name, LastModifiedBy.name FROM Account where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Account",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        midurl:"",
        fieldlevelactions:[{name:"ViewEye"}, {name:"Edit", actionUrl:"/e"}],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/001/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/001/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Contacts",
        value:"Contact",
        tooltipMessage:"View all contact on salesforce",
        isSearchable:true,
        formainmenu:true,
        isAdminComponent:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any contact.",
        queryForAll:"SELECT Id, Name, LastModifiedBy.name FROM Contact order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, Name, LastModifiedBy.name FROM Contact where Name like ",
        query:"SELECT Id, Name, LastModifiedBy.name FROM Contact where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Contact",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        midurl:"",
        fieldlevelactions:[{name:"ViewEye"}, {name:"Edit", actionUrl:"/e"}],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/003/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/003/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Opportunities",
        value:"Opportunity",
        tooltipMessage:"View all opportunity on salesforce",
        isSearchable:true,
        formainmenu:true,
        isAdminComponent:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any opportunity.",
        queryForAll:"SELECT Id, Name, LastModifiedBy.name FROM Opportunity order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, Name, LastModifiedBy.name FROM Opportunity where Name like ",
        query:"SELECT Id, Name, LastModifiedBy.name FROM Opportunity where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Opportunity",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        midurl:"",
        fieldlevelactions:[{name:"ViewEye"}, {name:"Edit", actionUrl:"/e"}],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/006/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/006/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Quotes",
        value:"Quote",
        tooltipMessage:"View all quotes on salesforce",
        isSearchable:true,
        formainmenu:true,
        isAdminComponent:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any quote.",
        queryForAll:"SELECT Id, Name, LastModifiedBy.name FROM Quote order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, Name, LastModifiedBy.name FROM Quote where Name like ",
        query:"SELECT Id, Name, LastModifiedBy.name FROM Quote where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Quote",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        fieldlevelactions:[{}],
        midurl:"",
        fieldlevelactions:[{name:"ViewEye"}, {name:"Edit", actionUrl:"/e"}],
        objectlevelaction:[
            {name:"All Quote", actionUrl:"/0Q0/o"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/0Q0/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Contracts",
        value:"Contract",
        tooltipMessage:"View all contracts on salesforce",
        isSearchable:true,
        formainmenu:true,
        isAdminComponent:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any contract.",
        queryForAll:"SELECT Id, ContractNumber, LastModifiedBy.name FROM Contract order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, ContractNumber, LastModifiedBy.name FROM Contract where Name like ",
        query:"SELECT Id, ContractNumber, LastModifiedBy.name FROM Contract where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Contract",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        fieldlevelactions:[{}],
        midurl:"",
        fieldlevelactions:[
            {name:"ViewEye"}, 
            {name:"Edit", actionUrl:"/e"}
            ],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/800/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/800/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Cases",
        value:"Case",
        tooltipMessage:"View all cases on salesforce",
        isSearchable:true,
        isAdminComponent:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any cases.",
        queryForAll:"SELECT Id, CaseNumber, LastModifiedBy.name FROM Case order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, CaseNumber, LastModifiedBy.name FROM Case where Name like ",
        query:"SELECT Id, CaseNumber, LastModifiedBy.name FROM Case where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Case",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        midurl:"",
        fieldlevelactions:[{name:"ViewEye"}, {name:"Edit", actionUrl:"/e"}],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/500/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/500/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Orders",
        value:"Order",
        tooltipMessage:"View all orders on salesforce",
        isSearchable:true,
        isAdminComponent:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any order.",
        queryForAll:"SELECT Id, OrderNumber, LastModifiedBy.name FROM Order order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, OrderNumber, LastModifiedBy.name FROM Order where Name like ",
        query:"SELECT Id, OrderNumber, LastModifiedBy.name FROM Order where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Order",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        fieldlevelactions:[{}],
        midurl:"",
        fieldlevelactions:[{name:"ViewEye"}, {name:"Edit", actionUrl:"/e"}],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/801/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/801/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Reports",
        value:"Report",
        tooltipMessage:"View all reports on salesforce",
        isSearchable:true,
        isAdminComponent:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any report.",
        queryForAll:"SELECT Id, Name, FolderName, LastModifiedBy.name FROM Report order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, Name, FolderName, LastModifiedBy.name FROM Report where Name like ",
        query:"SELECT Id, Name, FolderName, LastModifiedBy.name FROM Report where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Report",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        fieldlevelactions:[{}],
        midurl:"",
        fieldlevelactions:[
            {name:"ViewEye"}, 
            {name:"Edit", actionUrl:"/e"}
            ],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/00O/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/00O/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Dashboards",
        value:"Dashboard",
        tooltipMessage:"View all dashboards on salesforce",
        isSearchable:true,
        isAdminComponent:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any dashboard.",
        queryForAll:"SELECT Id, DeveloperName, LastModifiedBy.name FROM Dashboard order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, DeveloperName, LastModifiedBy.name FROM Dashboard where Name like ",
        query:"SELECT Id, DeveloperName, LastModifiedBy.name FROM Dashboard where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Dashboard",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        fieldlevelactions:[{}],
        midurl:"",
        fieldlevelactions:[
            {name:"ViewEye"}, 
            {name:"Edit", actionUrl:"/e"}
            ],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/01Z/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/01Z/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    },{
        label:"Assets",
        value:"Asset",
        tooltipMessage:"View all assets on salesforce",
        isSearchable:true,
        isAdminComponent:true,
        EligibleForAdvanceSearch:true,
        dataNotAvailableMessage:"You have not created/modified any asset.",
        queryForAll:"SELECT Id, Name, Status, LastModifiedBy.name FROM Asset order by LastModifiedDate desc",
        queryForAllWithWhere:"SELECT Id, Name, Status, LastModifiedBy.name FROM Asset where Name like ",
        query:"SELECT Id, Name, Status, LastModifiedBy.name FROM Asset where LastModifiedById='"+UserId.id+"' or CreatedById='"+UserId.id+"' order by LastModifiedDate desc",
        metadata:"Asset",
        type:"table",
        visibleForMetadataMenu:true,
        headers:["Edit", "Name"],
        fieldlevelactions:[{}],
        midurl:"",
        fieldlevelactions:[
            {name:"ViewEye"}, 
            {name:"Edit", actionUrl:"/e"}
            ],
        objectlevelaction:[
            {name:"New", actionUrl:"https://"+window.location.host+"/02i/e"},
            {name:"Setup", actionUrl:"/setup/forcecomHomepage.apexp?setupid=ForceCom"}, 
            {name:"All Tabs", actionUrl:"/home/showAllTabs.jsp"},
            {name:"Chatter", actionUrl:"/_ui/core/chatter/ui/ChatterPage"}
            ],
        url:"https://"+window.location.host+"/services/data/v42.0/query/?q=",
        listUrl:"/02i/o",
        midurl:"",
        placeholderText:"Quick find/search Group..."
    }
    /*,{
        label:"About",
        value:"About",
        tooltipMessage:"Open home page",
        formainmenu:true,
        isSearchable:false,
        visibleForMetadataMenu:true,
        eligibleForPackageXml:false,
        url:"",
        listUrl:"/",
        fieldlevelactions:[{}],
        objectlevelaction:[
                               {name:"Linkedin", actionUrl:"https://www.linkedin.com/in/rajnikantroy/"}, 
                               ,
                               {name:"GitHub", actionUrl:"https://github.com/rajnikantroy/Salesforce-Simplified"},
                               {name:"Donate", actionUrl:"https://www.paypal.me/rajnikantroy"}
                           ]
    }*/,{
        label:"Launcher Color",
        value:"LauncherColor",
        tooltipMessage:"Simplified Launcher Color",
        isSearchable:false,
        isSFDCDevComponent:true,
        isAdminComponent:true,
        isVlocityComponent:true,
        eligibleForPackageXml:false,
        url:"",
        visibleForMetadataMenu:true,
        listUrl:"/",
        fieldlevelactions:[{}],
        objectlevelaction:[
			   {name:"Feedback", actionUrl:"https://chrome.google.com/webstore/detail/salesforce-simplified/hjeigbpcblpkaienmpihneipkempijob?hl=en"},
               {name:"Report Issue", actionUrl:"https://github.com/rajnikantroy/SalesforceSimplified/issues/new"},
               {name:"Suggestions", actionUrl:"https://www.linkedin.com/in/rajnikantroy/"},
               {name:"Follow", actionUrl:"https://facebook.com/SalesforceSimplified"},
               {name:"Blog", actionUrl:"http://salesforcesimplify.blogspot.com/"}
           ]
    },{
        label:"FAQ",
        value:"Faq",
        tooltipMessage:"Open home page",
        isSearchable:false,
        isSFDCDevComponent:true,
        isAdminComponent:true,
        isVlocityComponent:true,
        eligibleForPackageXml:false,
        url:"",
        visibleForMetadataMenu:true,
        listUrl:"/",
        fieldlevelactions:[{}],
        objectlevelaction:[
                               {name:"Linkedin", actionUrl:"https://www.linkedin.com/in/rajnikantroy/"}, 
                               {name:"GitHub", actionUrl:"https://github.com/rajnikantroy/Salesforce-Simplified"}
                           ]
    }];

}]);