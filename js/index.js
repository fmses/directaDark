document.addEventListener('DOMContentLoaded', function() {
    const channelSelect = document.getElementById('channel-select');
    const chartIframe = document.querySelector('#chart2 .chart-container__iframe');

    const chartUrls = {
        SMS: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSs-EbAhYXIdRzTfTjPYEDJrSe5Jw3WvD17FMyZVopUbjDFBsc8cRiLZQDeFejoYg/pubchart?oid=1755801386&format=interactive',
        PUSH: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSs-EbAhYXIdRzTfTjPYEDJrSe5Jw3WvD17FMyZVopUbjDFBsc8cRiLZQDeFejoYg/pubchart?oid=2140187221&format=interactive',
        MAIL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSs-EbAhYXIdRzTfTjPYEDJrSe5Jw3WvD17FMyZVopUbjDFBsc8cRiLZQDeFejoYg/pubchart?oid=386433162&format=interactive'
    };

    channelSelect.addEventListener('change', function() {
        const selectedOption = channelSelect.value;
        chartIframe.src = chartUrls[selectedOption];
    });
});
