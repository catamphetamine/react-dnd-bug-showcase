import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend'
import { DragDropContext, DragLayer, DropTarget } from 'react-dnd'

// Decorate the root React application component with this decorator
export function DragAndDrop()
{
	const context = DragDropContext(HTML5Backend)

	const layer = DragLayer((monitor) =>
	({
		isDragging : monitor.isDragging(),
		// item           : monitor.getItem(),
		// item_type      : monitor.getItemType(),
		// current_offset : monitor.getSourceClientOffset()
	}))

	// Doesn't work: breaks `ReactDOM.hydrate()`.
	// ("Did not expect server HTML to contain ...")
	//
	// A workaround to prevent `react-dnd` from breaking server-side rendering.
	// https://github.com/react-dnd/react-dnd/issues/1192
	if (typeof window === 'undefined') {
		return component => component
	}

	return (component) => context(layer(component))
}