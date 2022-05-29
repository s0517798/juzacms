<?php
/**
 * JUZAWEB CMS - The Best CMS for Laravel Project
 *
 * @package    juzaweb/juzacms
 * @author     The Anh Dang <dangtheanh16@gmail.com>
 * @link       https://juzaweb.com/cms
 * @license    MIT
 */

namespace Juzaweb\Backend\Support\HTML;

class DataTable extends ElementBuilder
{
    public function __construct(\Juzaweb\CMS\Abstracts\DataTable $dataTable)
    {
        $this->item = [
            'type' => 'datatable',
            'data' => $dataTable->toArray(),
            'options' => []
        ];
    }
}
