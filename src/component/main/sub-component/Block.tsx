import img from '/img.jpeg'

export function Block() {
	return (
		<div>
			<h1>Content</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem odit
				aperiam nesciunt fuga minus eaque obcaecati doloribus quos delectus
				illum cupiditate eos quaerat necessitatibus quasi corrupti eveniet
				vitae, voluptates reprehenderit!
			</p>
			<img src={img} alt='img' />
		</div>
	)
}
