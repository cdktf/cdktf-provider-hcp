/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BoundaryClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Boundary cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#cluster_id BoundaryCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#id BoundaryCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The password of the initial admin user. This must be at least 8 characters in length. Note that this may show up in logs, and it will be stored in the state file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#password BoundaryCluster#password}
  */
  readonly password: string;
  /**
  * 
  * The ID of the HCP project where the Boundary cluster is located.
  * If not specified, the project specified in the HCP Provider config block will be used, if configured.
  * If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#project_id BoundaryCluster#project_id}
  */
  readonly projectId?: string;
  /**
  * The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#tier BoundaryCluster#tier}
  */
  readonly tier: string;
  /**
  * The username of the initial admin user. This must be at least 3 characters in length, alphanumeric, hyphen, or period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#username BoundaryCluster#username}
  */
  readonly username: string;
  /**
  * maintenance_window_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#maintenance_window_config BoundaryCluster#maintenance_window_config}
  */
  readonly maintenanceWindowConfig?: BoundaryClusterMaintenanceWindowConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#timeouts BoundaryCluster#timeouts}
  */
  readonly timeouts?: BoundaryClusterTimeouts;
}
export interface BoundaryClusterMaintenanceWindowConfig {
  /**
  * The maintenance day of the week for scheduled upgrades. Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#day BoundaryCluster#day}
  */
  readonly day?: string;
  /**
  * The end time which upgrades can be performed. Uses 24H clock and must be in UTC time zone. Valid options include - 1 to 24 (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#end BoundaryCluster#end}
  */
  readonly end?: number;
  /**
  * The start time which upgrades can be performed. Uses 24H clock and must be in UTC time zone. Valid options include - 0 to 23 (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#start BoundaryCluster#start}
  */
  readonly start?: number;
  /**
  * The upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#upgrade_type BoundaryCluster#upgrade_type}
  */
  readonly upgradeType?: string;
}

export function boundaryClusterMaintenanceWindowConfigToTerraform(struct?: BoundaryClusterMaintenanceWindowConfigOutputReference | BoundaryClusterMaintenanceWindowConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
    upgrade_type: cdktf.stringToTerraform(struct!.upgradeType),
  }
}

export class BoundaryClusterMaintenanceWindowConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BoundaryClusterMaintenanceWindowConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._upgradeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeType = this._upgradeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BoundaryClusterMaintenanceWindowConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._end = undefined;
      this._start = undefined;
      this._upgradeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._end = value.end;
      this._start = value.start;
      this._upgradeType = value.upgradeType;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // upgrade_type - computed: false, optional: true, required: false
  private _upgradeType?: string; 
  public get upgradeType() {
    return this.getStringAttribute('upgrade_type');
  }
  public set upgradeType(value: string) {
    this._upgradeType = value;
  }
  public resetUpgradeType() {
    this._upgradeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTypeInput() {
    return this._upgradeType;
  }
}
export interface BoundaryClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#create BoundaryCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#default BoundaryCluster#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#delete BoundaryCluster#delete}
  */
  readonly delete?: string;
}

export function boundaryClusterTimeoutsToTerraform(struct?: BoundaryClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class BoundaryClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BoundaryClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BoundaryClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster hcp_boundary_cluster}
*/
export class BoundaryCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_boundary_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BoundaryCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BoundaryCluster to import
  * @param importFromId The id of the existing BoundaryCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BoundaryCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_boundary_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/boundary_cluster hcp_boundary_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BoundaryClusterConfig
  */
  public constructor(scope: Construct, id: string, config: BoundaryClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_boundary_cluster',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.73.0',
        providerVersionConstraint: '~> 0.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._password = config.password;
    this._projectId = config.projectId;
    this._tier = config.tier;
    this._username = config.username;
    this._maintenanceWindowConfig.internalValue = config.maintenanceWindowConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_url - computed: true, optional: false, required: false
  public get clusterUrl() {
    return this.getStringAttribute('cluster_url');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // maintenance_window_config - computed: false, optional: true, required: false
  private _maintenanceWindowConfig = new BoundaryClusterMaintenanceWindowConfigOutputReference(this, "maintenance_window_config");
  public get maintenanceWindowConfig() {
    return this._maintenanceWindowConfig;
  }
  public putMaintenanceWindowConfig(value: BoundaryClusterMaintenanceWindowConfig) {
    this._maintenanceWindowConfig.internalValue = value;
  }
  public resetMaintenanceWindowConfig() {
    this._maintenanceWindowConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowConfigInput() {
    return this._maintenanceWindowConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BoundaryClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BoundaryClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.stringToTerraform(this._projectId),
      tier: cdktf.stringToTerraform(this._tier),
      username: cdktf.stringToTerraform(this._username),
      maintenance_window_config: boundaryClusterMaintenanceWindowConfigToTerraform(this._maintenanceWindowConfig.internalValue),
      timeouts: boundaryClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
