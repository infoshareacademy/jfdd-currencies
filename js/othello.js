for (var x = 0; x < 8; ++x) {
    document.write('<tr>');
    for (var y = 0; y < 8; ++y) {
        document.write('<td class=othelloSquare id=r' + x + y + '>' + '</td>');
    }
    document.write('</tr>');
}