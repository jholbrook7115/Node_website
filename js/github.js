jQuery.githubUserRepos = function(username, callback){
	jQuery.getJSON("http://api.github.com/users/" + username + "/repos?callback=?", callback);
}

jQuery.fn.loadRepositories = function(username){
	this.html("<span>Querying Github for repositories...</span>");

	var target = this;
	$.githubUserRepos(username, function(data){
		var repos = data.data;
		sortByLatestCommmit(repos);

		var list = $('<dl/>');
		target.empty().append(list);
		$(repos).each(function(){
			list.append('<dt><a href="' + this.url + '">' + this.name + '</a></dt>');
			list.append('<dd>' + this.description + '</dd>');
		});
	});


	function sortByLatestCommit(repos){
		repos.sort(function(a, b){
			return b.watchers - a.watchers;
		});
	}
};