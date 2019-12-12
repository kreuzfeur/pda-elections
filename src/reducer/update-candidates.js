const updateCandidates = (state, action) => {
	if (state === undefined) {
		return [
			{
				id: 0,
				name: 'Навальный 2к18',
				description: ' блоггер-атомоход, гигант мысли, внебрачный отец русской демократии, красная тряпка для нашистов, вождь хомячков, скандалист, популист, миноритарный акционер, толстенный тролль зажравшихся чиновников и госкорпораций в промышленном масштабе',
				imgUrl: 'http://lurkmore.so/images/thumb/2/2f/Navaskin.jpg/180px-Navaskin.jpg'
			},
			{
				id: 1,
				name: 'Владимир путин',
				description: 'Предиктор-праетор this страны',
				imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Vladimir_Putin_%282017-07-08%29.jpg/250px-Vladimir_Putin_%282017-07-08%29.jpg'
			},
			{
				id: 2,
				name: 'Павел Грудинин',
				description: 'он же Кандидат от народа, Клубничный король, главный редактор крупной Нью-Йоркской газеты, ярый поклонник эффективного менеджера Сталина,  коммунист-олигарх',
				imgUrl: 'http://lurkmore.so/images/thumb/4/45/Grudinin-obshhestvennyj-dejatel.jpg/300px-Grudinin-obshhestvennyj-dejatel.jpg'
			},
			{
				id: 3,
				name: 'Владимир Жириновский',
				description: 'стендап-комик, человек-мем, человек-анекдот, ярый [анти]семит, рэпер ртом, депутат руками-ногами и громким голосом, тролль, лжец и девственник и сын jewриста',
				imgUrl: 'http://lurkmore.so/images/thumb/d/de/%D0%96%D0%B8%D1%80%D0%B8%D0%BA.jpg/250px-%D0%96%D0%B8%D1%80%D0%B8%D0%BA.jpg'
			},
			{
				id: 4,
				name: 'Ксения Собчак',
				description: 'известная телеведущая, клон Пэрис Хилтон, троянский конь в среде либеральной оппозиции',
				imgUrl: 'http://lurkmore.so/images/thumb/4/49/Ksenia_horse.jpg/260px-Ksenia_horse.jpg'
			},
			{
				id: 5,
				name: 'Владимир путин',
				description: 'Предиктор-праетор this страны',
				imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Vladimir_Putin_%282017-07-08%29.jpg/250px-Vladimir_Putin_%282017-07-08%29.jpg'
			}
		]
	} 
	switch (state) {
		default:
			return state;
	}
}
export default updateCandidates;