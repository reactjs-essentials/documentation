import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import About from './About'

test('test about component', () => {
    const component = render(
        <About />
    )
    expect(component.getByText("Listado abot")).toBeInTheDocument();
})