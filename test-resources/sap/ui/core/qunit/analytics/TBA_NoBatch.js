/**
 * Responses for Single OData Requests
 */
o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=ActualCosts,Currency&$top=100&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630704056411\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"Currency\":\"USD\",\"ActualCosts\":\"11775332\"}],\"__count\":\"1\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,Currency&$top=0&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630858235641\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400020\",\"Currency\":\"USD\"}],\"__count\":\"106\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,ActualCosts,Currency&$orderby=CostCenter%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630815154661\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1588416\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630815154662\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1100\",\"Currency\":\"USD\",\"ActualCosts\":\"1398408\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630815154663\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1547326\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630815154664\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-2000\",\"Currency\":\"USD\",\"ActualCosts\":\"1542211\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630815154665\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-3000\",\"Currency\":\"USD\",\"ActualCosts\":\"1690110\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630815154666\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-4000\",\"Currency\":\"USD\",\"ActualCosts\":\"1190663\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630815154667\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-5000\",\"Currency\":\"USD\",\"ActualCosts\":\"1403813\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630815154668\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"300-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"661910\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629630815154669\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"300-2000\",\"Currency\":\"USD\",\"ActualCosts\":\"752475\"}],\"__count\":\"9\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=ActualCosts,Currency&$top=100&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632584674861\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"Currency\":\"USD\",\"ActualCosts\":\"11775332\"}],\"__count\":\"1\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,Currency&$top=0&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632737276461\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400020\",\"Currency\":\"USD\"}],\"__count\":\"106\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,ActualCosts,Currency&$orderby=CostCenter%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632609666021\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1588416\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632609666022\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1100\",\"Currency\":\"USD\",\"ActualCosts\":\"1398408\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632609666023\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1547326\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632609666024\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-2000\",\"Currency\":\"USD\",\"ActualCosts\":\"1542211\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632609666025\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-3000\",\"Currency\":\"USD\",\"ActualCosts\":\"1690110\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632609666026\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-4000\",\"Currency\":\"USD\",\"ActualCosts\":\"1190663\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632609666027\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-5000\",\"Currency\":\"USD\",\"ActualCosts\":\"1403813\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632609666028\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"300-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"661910\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629632609666029\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"300-2000\",\"Currency\":\"USD\",\"ActualCosts\":\"752475\"}],\"__count\":\"9\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,Currency,ActualCosts&$filter=(CostCenter%20eq%20%27100-1000%27)%20and%20(CostElement%20eq%20%27400020%27)&$orderby=CostCenter%20asc,CostElement%20asc,Currency%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629635788166471\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400020\",\"Currency\":\"USD\",\"ActualCosts\":\"131254\"}],\"__count\":\"1\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,Currency,ActualCosts&$filter=(CostCenter%20eq%20%27100-1000%27)%20and%20(CostElement%20eq%20%27410050%27)&$orderby=CostCenter%20asc,CostElement%20asc,Currency%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629637465541541\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"410050\",\"Currency\":\"USD\",\"ActualCosts\":\"44532\"}],\"__count\":\"1\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=ActualCosts,Currency&$top=100&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639205958821\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"Currency\":\"USD\",\"ActualCosts\":\"11775332\"}],\"__count\":\"1\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,Currency&$top=0&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639592633061\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400020\",\"Currency\":\"USD\"}],\"__count\":\"106\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,ActualCosts,Currency&$orderby=CostCenter%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639676903211\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1588416\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639676903212\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1100\",\"Currency\":\"USD\",\"ActualCosts\":\"1398408\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639676903213\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1547326\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639676903214\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-2000\",\"Currency\":\"USD\",\"ActualCosts\":\"1542211\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639676903215\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-3000\",\"Currency\":\"USD\",\"ActualCosts\":\"1690110\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639676903216\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-4000\",\"Currency\":\"USD\",\"ActualCosts\":\"1190663\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639676903217\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-5000\",\"Currency\":\"USD\",\"ActualCosts\":\"1403813\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639676903218\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"300-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"661910\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629639676903219\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"300-2000\",\"Currency\":\"USD\",\"ActualCosts\":\"752475\"}],\"__count\":\"9\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=ActualCosts,Currency&$filter=(substringof(%27100-%27,CostCenter))&$top=100&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629641328140791\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"Currency\":\"USD\",\"ActualCosts\":\"2986824\"}],\"__count\":\"1\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,Currency&$filter=(substringof(%27100-%27,CostCenter))&$top=0&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629641432138051\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400020\",\"Currency\":\"USD\"}],\"__count\":\"24\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,ActualCosts,Currency&$filter=(substringof(%27100-%27,CostCenter))&$orderby=CostCenter%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629641712405581\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1588416\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629641712405582\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1100\",\"Currency\":\"USD\",\"ActualCosts\":\"1398408\"}],\"__count\":\"2\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,Currency&$top=0&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643925923041\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400020\",\"Currency\":\"USD\"}],\"__count\":\"106\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=ActualCosts,Currency&$top=100&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643821838091\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"Currency\":\"USD\",\"ActualCosts\":\"11775332\"}],\"__count\":\"1\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,ActualCosts,Currency&$orderby=CostCenter%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643900374261\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1588416\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643900374262\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1100\",\"Currency\":\"USD\",\"ActualCosts\":\"1398408\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643900374263\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1547326\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643900374264\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-2000\",\"Currency\":\"USD\",\"ActualCosts\":\"1542211\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643900374265\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-3000\",\"Currency\":\"USD\",\"ActualCosts\":\"1690110\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643900374266\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-4000\",\"Currency\":\"USD\",\"ActualCosts\":\"1190663\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643900374267\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-5000\",\"Currency\":\"USD\",\"ActualCosts\":\"1403813\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643900374268\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"300-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"661910\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629643900374269\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"300-2000\",\"Currency\":\"USD\",\"ActualCosts\":\"752475\"}],\"__count\":\"9\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=ActualCosts,Currency&$top=100&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647388979221\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"Currency\":\"USD\",\"ActualCosts\":\"11775332\"}],\"__count\":\"1\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,ActualCosts,Currency&$orderby=CostCenter%20desc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647346791121\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"300-2000\",\"Currency\":\"USD\",\"ActualCosts\":\"752475\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647346791122\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"300-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"661910\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647346791123\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-5000\",\"Currency\":\"USD\",\"ActualCosts\":\"1403813\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647346791124\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-4000\",\"Currency\":\"USD\",\"ActualCosts\":\"1190663\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647346791125\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-3000\",\"Currency\":\"USD\",\"ActualCosts\":\"1690110\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647346791126\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-2000\",\"Currency\":\"USD\",\"ActualCosts\":\"1542211\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647346791127\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"200-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1547326\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647346791128\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1100\",\"Currency\":\"USD\",\"ActualCosts\":\"1398408\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647346791129\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"Currency\":\"USD\",\"ActualCosts\":\"1588416\"}],\"__count\":\"9\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,ActualCosts,Currency&$filter=(CostCenter%20eq%20%27100-1000%27)&$orderby=CostCenter%20desc,CostElement%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647359945621\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400020\",\"Currency\":\"USD\",\"ActualCosts\":\"131254\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647359945622\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400021\",\"Currency\":\"USD\",\"ActualCosts\":\"132025\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647359945623\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"410050\",\"Currency\":\"USD\",\"ActualCosts\":\"44532\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647359945624\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"417900\",\"Currency\":\"USD\",\"ActualCosts\":\"12521\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647359945625\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"421000\",\"Currency\":\"USD\",\"ActualCosts\":\"4532\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647359945626\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"430100\",\"Currency\":\"USD\",\"ActualCosts\":\"675652\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647359945627\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"435000\",\"Currency\":\"USD\",\"ActualCosts\":\"131254\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647359945628\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"440001\",\"Currency\":\"USD\",\"ActualCosts\":\"352126\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629647359945629\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"449000\",\"Currency\":\"USD\",\"ActualCosts\":\"76521\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'236296473599456210\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"474240\",\"Currency\":\"USD\",\"ActualCosts\":\"9145\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'236296473599456211\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"476900\",\"Currency\":\"USD\",\"ActualCosts\":\"7589\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'236296473599456212\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"478000\",\"Currency\":\"USD\",\"ActualCosts\":\"11265\"}],\"__count\":\"12\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,ActualCosts,Currency&$filter=(CostCenter%20eq%20%27100-1000%27)&$orderby=CostCenter%20asc,CostElement%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629659555711441\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400020\",\"Currency\":\"USD\",\"ActualCosts\":\"131254\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629659555711442\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400021\",\"Currency\":\"USD\",\"ActualCosts\":\"132025\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629659555711443\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"410050\",\"Currency\":\"USD\",\"ActualCosts\":\"44532\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629659555711444\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"417900\",\"Currency\":\"USD\",\"ActualCosts\":\"12521\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629659555711445\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"421000\",\"Currency\":\"USD\",\"ActualCosts\":\"4532\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629659555711446\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"430100\",\"Currency\":\"USD\",\"ActualCosts\":\"675652\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629659555711447\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"435000\",\"Currency\":\"USD\",\"ActualCosts\":\"131254\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629659555711448\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"440001\",\"Currency\":\"USD\",\"ActualCosts\":\"352126\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629659555711449\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"449000\",\"Currency\":\"USD\",\"ActualCosts\":\"76521\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'236296595557114410\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"474240\",\"Currency\":\"USD\",\"ActualCosts\":\"9145\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'236296595557114411\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"476900\",\"Currency\":\"USD\",\"ActualCosts\":\"7589\"},{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'236296595557114412\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"478000\",\"Currency\":\"USD\",\"ActualCosts\":\"11265\"}],\"__count\":\"12\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,Currency,ActualCosts&$filter=(CostCenter%20eq%20%27100-1000%27)%20and%20(CostElement%20eq%20%27400020%27)&$orderby=CostCenter%20asc,CostElement%20asc,Currency%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629661092979911\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400020\",\"Currency\":\"USD\",\"ActualCosts\":\"131254\"}],\"__count\":\"1\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,Currency,ActualCosts&$filter=(CostCenter%20eq%20%27100-1000%27)%20and%20(CostElement%20eq%20%27410050%27)&$orderby=CostCenter%20asc,CostElement%20asc,Currency%20asc&$top=120&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://o4aFakeService:8080/ActualPlannedCostsResults(\'23629662800721931\')\",\"type\":\"fake.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"410050\",\"Currency\":\"USD\",\"ActualCosts\":\"44532\"}],\"__count\":\"1\"}}"
});

o4aFakeService.addResponse({
	uri: "ActualPlannedCosts(P_ControllingArea=\'US01\',P_CostCenter=\'100-1000\',P_CostCenterTo=\'999-9999\')/Results?$select=CostCenter,CostElement,ActualCosts,Currency&$filter=(CostCenter%20eq%20%27100-1000%27)&$orderby=CostCenter%20asc,CostElement%20asc&$top=20&$inlinecount=allpages",
	header: o4aFakeService.headers.JSON,
	content: "{\"d\":{\"results\":[{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'43196236913942581\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400020\",\"Currency\":\"USD\",\"CostElementText\":\"Flights\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"131254\",\"PlannedCosts\":\"120000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'43196236913942582\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"400021\",\"Currency\":\"USD\",\"CostElementText\":\"Lodging\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"132025\",\"PlannedCosts\":\"150000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'43196236913942583\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"410050\",\"Currency\":\"USD\",\"CostElementText\":\"Rental Cars\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"44532\",\"PlannedCosts\":\"43000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'43196236913942584\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"417900\",\"Currency\":\"USD\",\"CostElementText\":\"Third Party\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"12521\",\"PlannedCosts\":\"20000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'43196236913942585\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"421000\",\"Currency\":\"USD\",\"CostElementText\":\"Indirect labor costs\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"4532\",\"PlannedCosts\":\"5000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'43196236913942586\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"430100\",\"Currency\":\"USD\",\"CostElementText\":\"Salaries & Wages\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"675652\",\"PlannedCosts\":\"670000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'43196236913942587\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"435000\",\"Currency\":\"USD\",\"CostElementText\":\"Annual Bonus\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"131254\",\"PlannedCosts\":\"130000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'43196236913942588\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"440001\",\"Currency\":\"USD\",\"CostElementText\":\"Legal Social Expense\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"352126\",\"PlannedCosts\":\"350000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'43196236913942589\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"449000\",\"Currency\":\"USD\",\"CostElementText\":\"Other Personnel Exp.\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"76521\",\"PlannedCosts\":\"75000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'431962369139425810\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"474240\",\"Currency\":\"USD\",\"CostElementText\":\"Travel Exp. Other\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"9145\",\"PlannedCosts\":\"9000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'431962369139425811\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"476900\",\"Currency\":\"USD\",\"CostElementText\":\"Other Costs\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"7589\",\"PlannedCosts\":\"8000\"},{\"__metadata\": {\"uri\":\"http://localhost:8080/uilib-sample/proxy/http/dewdflhanaui5.emea.global.corp.sap:8000/tmp/d041558/cca/CCA.xsodata/ActualPlannedCostsResults(\'431962369139425812\')\",\"type\":\"tmp.d041558.cca.CCA.ActualPlannedCostsResultsType\"},\"CostCenter\":\"100-1000\",\"CostElement\":\"478000\",\"Currency\":\"USD\",\"CostElementText\":\"Conference Fees\",\"CostCenterText\":\"Consulting US\",\"ActualCosts\":\"11265\",\"PlannedCosts\":\"13000\"}],\"__count\":\"12\"}}"
});
