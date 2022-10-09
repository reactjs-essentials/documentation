import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import About from './About'

test('test about component', () => {
    const component = render(
        <About />
    )
    component.getByText('Listado about')
    expect(component.container).toHaveTextContent("Listado about")
    expect(component.getByText("Listado about")).toBeInTheDocument();
})