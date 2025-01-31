<?php
/**
 * JUZAWEB CMS - The Best CMS for Laravel Project
 *
 * @package    juzaweb/juzacms
 * @author     Juzaweb Team <admin@juzaweb.com>
 * @link       https://juzaweb.com
 * @license    MIT
 */

namespace Juzaweb\Backend\Actions;

use Juzaweb\CMS\Abstracts\Action;

class BackupAction extends Action
{
    public function handle()
    {
        $this->addAction(Action::BACKEND_INIT, [$this, 'addConfigs']);
    }

    public function addConfigs(): void
    {
        $this->hookAction->registerConfig(
            [
                'jw_backup_enable' => [
                    'form' => 'backup',
                    'type' => 'checkbox',
                    'label' => trans('cms::app.backup.enable_backup'),
                ],
                'jw_backup_time' => [
                    'form' => 'backup',
                    'type' => 'select',
                    'label' => trans('cms::app.backup.backup_time'),
                    'data' => [
                        'options' => [
                            'daily' => 'Daily',
                            'weekly' => 'Weekly',
                            'monthly' => 'Monthly',
                        ]
                    ]
                ]
            ]
        );

        $this->hookAction->addSettingForm(
            'backup',
            [
                'name' => trans('cms::app.backup.backup_setting'),
                'priority' => 99,
            ]
        );
    }
}
