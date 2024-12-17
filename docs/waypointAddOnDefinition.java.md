# `waypointAddOnDefinition` Submodule <a name="`waypointAddOnDefinition` Submodule" id="@cdktf/provider-hcp.waypointAddOnDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointAddOnDefinition <a name="WaypointAddOnDefinition" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition hcp_waypoint_add_on_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinition;

WaypointAddOnDefinition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .description(java.lang.String)
    .name(java.lang.String)
    .summary(java.lang.String)
    .terraformNoCodeModuleSource(java.lang.String)
    .terraformProjectId(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .projectId(java.lang.String)
//  .readmeMarkdownTemplate(java.lang.String)
//  .terraformAgentPoolId(java.lang.String)
//  .terraformCloudWorkspaceDetails(WaypointAddOnDefinitionTerraformCloudWorkspaceDetails)
//  .terraformExecutionMode(java.lang.String)
//  .variableOptions(IResolvable)
//  .variableOptions(java.util.List<WaypointAddOnDefinitionVariableOptions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A longer description of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.summary">summary</a></code> | <code>java.lang.String</code> | A short summary of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformNoCodeModuleSource">terraformNoCodeModuleSource</a></code> | <code>java.lang.String</code> | Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformProjectId">terraformProjectId</a></code> | <code>java.lang.String</code> | The ID of the Terraform Cloud Project to create workspaces in. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | List of labels attached to this Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Waypoint Add-on Definition is located. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>java.lang.String</code> | The markdown template for the Add-on Definition README (markdown format supported). |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformAgentPoolId">terraformAgentPoolId</a></code> | <code>java.lang.String</code> | The ID of the Terraform agent pool to use for running Terraform operations. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformExecutionMode">terraformExecutionMode</a></code> | <code>java.lang.String</code> | The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.variableOptions">variableOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>></code> | List of variable options for the Add-on Definition. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A longer description of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#description WaypointAddOnDefinition#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.summary"></a>

- *Type:* java.lang.String

A short summary of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#summary WaypointAddOnDefinition#summary}

---

##### `terraformNoCodeModuleSource`<sup>Required</sup> <a name="terraformNoCodeModuleSource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformNoCodeModuleSource"></a>

- *Type:* java.lang.String

Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_no_code_module_source WaypointAddOnDefinition#terraform_no_code_module_source}

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformProjectId"></a>

- *Type:* java.lang.String

The ID of the Terraform Cloud Project to create workspaces in.

The ID is found on the Terraform Cloud Project settings page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.labels"></a>

- *Type:* java.util.List<java.lang.String>

List of labels attached to this Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#labels WaypointAddOnDefinition#labels}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the Waypoint Add-on Definition is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#project_id WaypointAddOnDefinition#project_id}

---

##### `readmeMarkdownTemplate`<sup>Optional</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.readmeMarkdownTemplate"></a>

- *Type:* java.lang.String

The markdown template for the Add-on Definition README (markdown format supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#readme_markdown_template WaypointAddOnDefinition#readme_markdown_template}

---

##### `terraformAgentPoolId`<sup>Optional</sup> <a name="terraformAgentPoolId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformAgentPoolId"></a>

- *Type:* java.lang.String

The ID of the Terraform agent pool to use for running Terraform operations.

This is only applicable when the execution mode is set to 'agent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_agent_pool_id WaypointAddOnDefinition#terraform_agent_pool_id}

---

##### `terraformCloudWorkspaceDetails`<sup>Optional</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformCloudWorkspaceDetails"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_cloud_workspace_details WaypointAddOnDefinition#terraform_cloud_workspace_details}

---

##### `terraformExecutionMode`<sup>Optional</sup> <a name="terraformExecutionMode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformExecutionMode"></a>

- *Type:* java.lang.String

The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_execution_mode WaypointAddOnDefinition#terraform_execution_mode}

---

##### `variableOptions`<sup>Optional</sup> <a name="variableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.variableOptions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>>

List of variable options for the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#variable_options WaypointAddOnDefinition#variable_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putTerraformCloudWorkspaceDetails">putTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putVariableOptions">putVariableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetReadmeMarkdownTemplate">resetReadmeMarkdownTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformAgentPoolId">resetTerraformAgentPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformCloudWorkspaceDetails">resetTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformExecutionMode">resetTerraformExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetVariableOptions">resetVariableOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTerraformCloudWorkspaceDetails` <a name="putTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putTerraformCloudWorkspaceDetails"></a>

```java
public void putTerraformCloudWorkspaceDetails(WaypointAddOnDefinitionTerraformCloudWorkspaceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putTerraformCloudWorkspaceDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>

---

##### `putVariableOptions` <a name="putVariableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putVariableOptions"></a>

```java
public void putVariableOptions(IResolvable OR java.util.List<WaypointAddOnDefinitionVariableOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putVariableOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>>

---

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetReadmeMarkdownTemplate` <a name="resetReadmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetReadmeMarkdownTemplate"></a>

```java
public void resetReadmeMarkdownTemplate()
```

##### `resetTerraformAgentPoolId` <a name="resetTerraformAgentPoolId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformAgentPoolId"></a>

```java
public void resetTerraformAgentPoolId()
```

##### `resetTerraformCloudWorkspaceDetails` <a name="resetTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformCloudWorkspaceDetails"></a>

```java
public void resetTerraformCloudWorkspaceDetails()
```

##### `resetTerraformExecutionMode` <a name="resetTerraformExecutionMode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformExecutionMode"></a>

```java
public void resetTerraformExecutionMode()
```

##### `resetVariableOptions` <a name="resetVariableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetVariableOptions"></a>

```java
public void resetVariableOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WaypointAddOnDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinition;

WaypointAddOnDefinition.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinition;

WaypointAddOnDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinition;

WaypointAddOnDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinition;

WaypointAddOnDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WaypointAddOnDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WaypointAddOnDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WaypointAddOnDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WaypointAddOnDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WaypointAddOnDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference">WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptions">variableOptions</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList">WaypointAddOnDefinitionVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplateInput">readmeMarkdownTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolIdInput">terraformAgentPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetailsInput">terraformCloudWorkspaceDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionModeInput">terraformExecutionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSourceInput">terraformNoCodeModuleSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectIdInput">terraformProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptionsInput">variableOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolId">terraformAgentPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionMode">terraformExecutionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSource">terraformNoCodeModuleSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectId">terraformProjectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `terraformCloudWorkspaceDetails`<sup>Required</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetails"></a>

```java
public WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference getTerraformCloudWorkspaceDetails();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference">WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `variableOptions`<sup>Required</sup> <a name="variableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptions"></a>

```java
public WaypointAddOnDefinitionVariableOptionsList getVariableOptions();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList">WaypointAddOnDefinitionVariableOptionsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `readmeMarkdownTemplateInput`<sup>Optional</sup> <a name="readmeMarkdownTemplateInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplateInput"></a>

```java
public java.lang.String getReadmeMarkdownTemplateInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `terraformAgentPoolIdInput`<sup>Optional</sup> <a name="terraformAgentPoolIdInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolIdInput"></a>

```java
public java.lang.String getTerraformAgentPoolIdInput();
```

- *Type:* java.lang.String

---

##### `terraformCloudWorkspaceDetailsInput`<sup>Optional</sup> <a name="terraformCloudWorkspaceDetailsInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetailsInput"></a>

```java
public java.lang.Object getTerraformCloudWorkspaceDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>

---

##### `terraformExecutionModeInput`<sup>Optional</sup> <a name="terraformExecutionModeInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionModeInput"></a>

```java
public java.lang.String getTerraformExecutionModeInput();
```

- *Type:* java.lang.String

---

##### `terraformNoCodeModuleSourceInput`<sup>Optional</sup> <a name="terraformNoCodeModuleSourceInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSourceInput"></a>

```java
public java.lang.String getTerraformNoCodeModuleSourceInput();
```

- *Type:* java.lang.String

---

##### `terraformProjectIdInput`<sup>Optional</sup> <a name="terraformProjectIdInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectIdInput"></a>

```java
public java.lang.String getTerraformProjectIdInput();
```

- *Type:* java.lang.String

---

##### `variableOptionsInput`<sup>Optional</sup> <a name="variableOptionsInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptionsInput"></a>

```java
public java.lang.Object getVariableOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `readmeMarkdownTemplate`<sup>Required</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplate"></a>

```java
public java.lang.String getReadmeMarkdownTemplate();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `terraformAgentPoolId`<sup>Required</sup> <a name="terraformAgentPoolId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolId"></a>

```java
public java.lang.String getTerraformAgentPoolId();
```

- *Type:* java.lang.String

---

##### `terraformExecutionMode`<sup>Required</sup> <a name="terraformExecutionMode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionMode"></a>

```java
public java.lang.String getTerraformExecutionMode();
```

- *Type:* java.lang.String

---

##### `terraformNoCodeModuleSource`<sup>Required</sup> <a name="terraformNoCodeModuleSource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSource"></a>

```java
public java.lang.String getTerraformNoCodeModuleSource();
```

- *Type:* java.lang.String

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectId"></a>

```java
public java.lang.String getTerraformProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointAddOnDefinitionConfig <a name="WaypointAddOnDefinitionConfig" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinitionConfig;

WaypointAddOnDefinitionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .description(java.lang.String)
    .name(java.lang.String)
    .summary(java.lang.String)
    .terraformNoCodeModuleSource(java.lang.String)
    .terraformProjectId(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .projectId(java.lang.String)
//  .readmeMarkdownTemplate(java.lang.String)
//  .terraformAgentPoolId(java.lang.String)
//  .terraformCloudWorkspaceDetails(WaypointAddOnDefinitionTerraformCloudWorkspaceDetails)
//  .terraformExecutionMode(java.lang.String)
//  .variableOptions(IResolvable)
//  .variableOptions(java.util.List<WaypointAddOnDefinitionVariableOptions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A longer description of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.summary">summary</a></code> | <code>java.lang.String</code> | A short summary of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformNoCodeModuleSource">terraformNoCodeModuleSource</a></code> | <code>java.lang.String</code> | Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformProjectId">terraformProjectId</a></code> | <code>java.lang.String</code> | The ID of the Terraform Cloud Project to create workspaces in. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | List of labels attached to this Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Waypoint Add-on Definition is located. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>java.lang.String</code> | The markdown template for the Add-on Definition README (markdown format supported). |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformAgentPoolId">terraformAgentPoolId</a></code> | <code>java.lang.String</code> | The ID of the Terraform agent pool to use for running Terraform operations. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformExecutionMode">terraformExecutionMode</a></code> | <code>java.lang.String</code> | The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.variableOptions">variableOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>></code> | List of variable options for the Add-on Definition. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A longer description of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#description WaypointAddOnDefinition#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

A short summary of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#summary WaypointAddOnDefinition#summary}

---

##### `terraformNoCodeModuleSource`<sup>Required</sup> <a name="terraformNoCodeModuleSource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformNoCodeModuleSource"></a>

```java
public java.lang.String getTerraformNoCodeModuleSource();
```

- *Type:* java.lang.String

Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_no_code_module_source WaypointAddOnDefinition#terraform_no_code_module_source}

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformProjectId"></a>

```java
public java.lang.String getTerraformProjectId();
```

- *Type:* java.lang.String

The ID of the Terraform Cloud Project to create workspaces in.

The ID is found on the Terraform Cloud Project settings page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

List of labels attached to this Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#labels WaypointAddOnDefinition#labels}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the Waypoint Add-on Definition is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#project_id WaypointAddOnDefinition#project_id}

---

##### `readmeMarkdownTemplate`<sup>Optional</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.readmeMarkdownTemplate"></a>

```java
public java.lang.String getReadmeMarkdownTemplate();
```

- *Type:* java.lang.String

The markdown template for the Add-on Definition README (markdown format supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#readme_markdown_template WaypointAddOnDefinition#readme_markdown_template}

---

##### `terraformAgentPoolId`<sup>Optional</sup> <a name="terraformAgentPoolId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformAgentPoolId"></a>

```java
public java.lang.String getTerraformAgentPoolId();
```

- *Type:* java.lang.String

The ID of the Terraform agent pool to use for running Terraform operations.

This is only applicable when the execution mode is set to 'agent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_agent_pool_id WaypointAddOnDefinition#terraform_agent_pool_id}

---

##### `terraformCloudWorkspaceDetails`<sup>Optional</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformCloudWorkspaceDetails"></a>

```java
public WaypointAddOnDefinitionTerraformCloudWorkspaceDetails getTerraformCloudWorkspaceDetails();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_cloud_workspace_details WaypointAddOnDefinition#terraform_cloud_workspace_details}

---

##### `terraformExecutionMode`<sup>Optional</sup> <a name="terraformExecutionMode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformExecutionMode"></a>

```java
public java.lang.String getTerraformExecutionMode();
```

- *Type:* java.lang.String

The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_execution_mode WaypointAddOnDefinition#terraform_execution_mode}

---

##### `variableOptions`<sup>Optional</sup> <a name="variableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.variableOptions"></a>

```java
public java.lang.Object getVariableOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>>

List of variable options for the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#variable_options WaypointAddOnDefinition#variable_options}

---

### WaypointAddOnDefinitionTerraformCloudWorkspaceDetails <a name="WaypointAddOnDefinitionTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails;

WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.builder()
    .name(java.lang.String)
    .terraformProjectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Terraform Cloud Project. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.terraformProjectId">terraformProjectId</a></code> | <code>java.lang.String</code> | Terraform Cloud Project ID. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Terraform Cloud Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.terraformProjectId"></a>

```java
public java.lang.String getTerraformProjectId();
```

- *Type:* java.lang.String

Terraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}

---

### WaypointAddOnDefinitionVariableOptions <a name="WaypointAddOnDefinitionVariableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinitionVariableOptions;

WaypointAddOnDefinitionVariableOptions.builder()
    .name(java.lang.String)
    .options(java.util.List<java.lang.String>)
    .variableType(java.lang.String)
//  .userEditable(java.lang.Boolean)
//  .userEditable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.name">name</a></code> | <code>java.lang.String</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | List of options. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.variableType">variableType</a></code> | <code>java.lang.String</code> | Variable type. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.userEditable">userEditable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the variable is editable by the user creating an add-on. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

List of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#options WaypointAddOnDefinition#options}

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#variable_type WaypointAddOnDefinition#variable_type}

---

##### `userEditable`<sup>Optional</sup> <a name="userEditable" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.userEditable"></a>

```java
public java.lang.Object getUserEditable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the variable is editable by the user creating an add-on.

If options are provided, then the user may only use those options, regardless of this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on_definition#user_editable WaypointAddOnDefinition#user_editable}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference <a name="WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference;

new WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput">terraformProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">terraformProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `terraformProjectIdInput`<sup>Optional</sup> <a name="terraformProjectIdInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput"></a>

```java
public java.lang.String getTerraformProjectIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```java
public java.lang.String getTerraformProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>

---


### WaypointAddOnDefinitionVariableOptionsList <a name="WaypointAddOnDefinitionVariableOptionsList" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinitionVariableOptionsList;

new WaypointAddOnDefinitionVariableOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.get"></a>

```java
public WaypointAddOnDefinitionVariableOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>>

---


### WaypointAddOnDefinitionVariableOptionsOutputReference <a name="WaypointAddOnDefinitionVariableOptionsOutputReference" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on_definition.WaypointAddOnDefinitionVariableOptionsOutputReference;

new WaypointAddOnDefinitionVariableOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resetUserEditable">resetUserEditable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserEditable` <a name="resetUserEditable" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resetUserEditable"></a>

```java
public void resetUserEditable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditableInput">userEditableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableTypeInput">variableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditable">userEditable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableType">variableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.optionsInput"></a>

```java
public java.util.List<java.lang.String> getOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEditableInput`<sup>Optional</sup> <a name="userEditableInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditableInput"></a>

```java
public java.lang.Object getUserEditableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableTypeInput"></a>

```java
public java.lang.String getVariableTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEditable`<sup>Required</sup> <a name="userEditable" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditable"></a>

```java
public java.lang.Object getUserEditable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>

---



