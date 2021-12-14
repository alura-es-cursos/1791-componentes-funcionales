import {
	useState,
	useEffect,
} from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Switch from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import { FormControl } from "@mui/material"

function FormSignUp() {
	const [name, setName] = useState("")
	useEffect(() => {
		console.log("Name cambio: ", name)
	}, [name])
	return (
		<form>
			<TextField
				id="name"
				label="Nombre"
				variant="outlined"
				fullWidth
				margin="normal"
				onChange={(e) => {
					console.log(e.target.value)
					setName(e.target.value)
				}}
				value={name}
			/>
			<TextField
				id="lastName"
				label="Apellidos"
				variant="outlined"
				fullWidth
				margin="normal"
			/>
			<TextField
				id="email"
				label="Email"
				variant="outlined"
				fullWidth
				margin="normal"
			/>
			<FormGroup>
				<FormControlLabel
					control={
						<Switch defaultChecked />
					}
					label="Promociones"
				/>

				<FormControlLabel
					control={
						<Switch defaultChecked />
					}
					label="Novedades"
				/>
			</FormGroup>
			<Button variant="contained">
				Registrarse
			</Button>
		</form>
	)
}

export default FormSignUp
