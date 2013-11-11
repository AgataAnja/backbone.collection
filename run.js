var Mutant = Backbone.Model.extend({
	useSuperScills : function () {
		console.log(this.name+'\'s superScill is active');
	},
	// name : options.name
	hasGenomeX : true,
	title : 'X-Men'
});

var magneto = new Mutant(), // ({name : 'Magneto'}),
	wolverine = new Mutant(),	
	xavier = new Mutant(),				
	black_widow = new Mutant(),
	nick_fury = new Mutant(),
	darth_vader = new Mutant();

magneto.name = 'Magneto';
wolverine.name = 'Wolverine';
xavier.name = 'Charles Xavier';
black_widow.name = 'Black Widow';
nick_fury.name = 'Nick Fury';
darth_vader.name = 'Darth Vader';

magneto.kindness = false;
wolverine.kindness = false;
xavier.kindness = true;
black_widow.kindness = true;
nick_fury.kindness = true;
darth_vader.kindness = false;

var SuperHeroes = Backbone.Collection.extend({
	model : Mutant,
	savingWorld : function () {
		this.each(function (person) { // ??? only element of collection
			person.useSuperScills();
			console.log('The world is saving...')
		})
	},
	pullingKittenFromTree : function () {
		this.each(function (person) {
			if (person.kindness) {
				console.log('kittens are saved')
			}
		})
	},
	costumedCrimefighter : true
});

var avengers = new SuperHeroes();

avengers.add(magneto);
avengers.add(wolverine);
avengers.add(xavier);
avengers.add(black_widow);
avengers.add(nick_fury);
avengers.add(darth_vader);