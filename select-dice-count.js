const content =  `
    <form>
        <div class="form-group">
            <label>Number of Dice:</label>
            <div class="form-fields">
                <input name="dice-count" value="1">
            </div>
        </div>
    </form>
`;
new Dialog({
    title: "Roll d[DIE TYPE]", // edit this to your liking.
    content,
    buttons: {
        roll: {
            label: "Roll!",
            callback: async (html) => {
                const count = html.find("[name=dice-count]")[0].value;
                const roll = await new Roll(`${count}d[DIE TYPE]`).evaluate();
                await roll.toMessage();
            }
        }
    },
    default: "roll"
}).render(true);
