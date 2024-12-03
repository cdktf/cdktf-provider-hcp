# `vaultRadarIntegrationJiraSubscription` Submodule <a name="`vaultRadarIntegrationJiraSubscription` Submodule" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarIntegrationJiraSubscription <a name="VaultRadarIntegrationJiraSubscription" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription hcp_vault_radar_integration_jira_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_integration_jira_subscription.VaultRadarIntegrationJiraSubscription;

VaultRadarIntegrationJiraSubscription.Builder.create(Construct scope, java.lang.String id)
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
    .connectionId(java.lang.String)
    .issueType(java.lang.String)
    .jiraProjectKey(java.lang.String)
    .name(java.lang.String)
//  .assignee(java.lang.String)
//  .message(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | id of the integration jira connection to use for the subscription. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.issueType">issueType</a></code> | <code>java.lang.String</code> | The type of issue to be created from the event(s). Example: Task. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.jiraProjectKey">jiraProjectKey</a></code> | <code>java.lang.String</code> | The name of the project under which the jira issue will be created. Example: OPS. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of subscription. Name must be unique. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.assignee">assignee</a></code> | <code>java.lang.String</code> | The identifier of the Jira user who will be assigned the ticket. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.message">message</a></code> | <code>java.lang.String</code> | This message will be included in the ticket description. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

id of the integration jira connection to use for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#connection_id VaultRadarIntegrationJiraSubscription#connection_id}

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.issueType"></a>

- *Type:* java.lang.String

The type of issue to be created from the event(s). Example: Task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#issue_type VaultRadarIntegrationJiraSubscription#issue_type}

---

##### `jiraProjectKey`<sup>Required</sup> <a name="jiraProjectKey" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.jiraProjectKey"></a>

- *Type:* java.lang.String

The name of the project under which the jira issue will be created. Example: OPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#jira_project_key VaultRadarIntegrationJiraSubscription#jira_project_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of subscription. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#name VaultRadarIntegrationJiraSubscription#name}

---

##### `assignee`<sup>Optional</sup> <a name="assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.assignee"></a>

- *Type:* java.lang.String

The identifier of the Jira user who will be assigned the ticket.

In case of Jira Cloud, this will be the Atlassian Account ID of the user. Example: 71509:11bb945b-c0de-4bac-9d57-9f09db2f7bc9

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#assignee VaultRadarIntegrationJiraSubscription#assignee}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.message"></a>

- *Type:* java.lang.String

This message will be included in the ticket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#message VaultRadarIntegrationJiraSubscription#message}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#project_id VaultRadarIntegrationJiraSubscription#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetAssignee">resetAssignee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAssignee` <a name="resetAssignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetAssignee"></a>

```java
public void resetAssignee()
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarIntegrationJiraSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_integration_jira_subscription.VaultRadarIntegrationJiraSubscription;

VaultRadarIntegrationJiraSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_integration_jira_subscription.VaultRadarIntegrationJiraSubscription;

VaultRadarIntegrationJiraSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_integration_jira_subscription.VaultRadarIntegrationJiraSubscription;

VaultRadarIntegrationJiraSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_integration_jira_subscription.VaultRadarIntegrationJiraSubscription;

VaultRadarIntegrationJiraSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultRadarIntegrationJiraSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VaultRadarIntegrationJiraSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultRadarIntegrationJiraSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultRadarIntegrationJiraSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarIntegrationJiraSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assigneeInput">assigneeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueTypeInput">issueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKeyInput">jiraProjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assignee">assignee</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueType">issueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKey">jiraProjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `assigneeInput`<sup>Optional</sup> <a name="assigneeInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assigneeInput"></a>

```java
public java.lang.String getAssigneeInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `issueTypeInput`<sup>Optional</sup> <a name="issueTypeInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueTypeInput"></a>

```java
public java.lang.String getIssueTypeInput();
```

- *Type:* java.lang.String

---

##### `jiraProjectKeyInput`<sup>Optional</sup> <a name="jiraProjectKeyInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKeyInput"></a>

```java
public java.lang.String getJiraProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `assignee`<sup>Required</sup> <a name="assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assignee"></a>

```java
public java.lang.String getAssignee();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueType"></a>

```java
public java.lang.String getIssueType();
```

- *Type:* java.lang.String

---

##### `jiraProjectKey`<sup>Required</sup> <a name="jiraProjectKey" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKey"></a>

```java
public java.lang.String getJiraProjectKey();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarIntegrationJiraSubscriptionConfig <a name="VaultRadarIntegrationJiraSubscriptionConfig" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_integration_jira_subscription.VaultRadarIntegrationJiraSubscriptionConfig;

VaultRadarIntegrationJiraSubscriptionConfig.builder()
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
    .connectionId(java.lang.String)
    .issueType(java.lang.String)
    .jiraProjectKey(java.lang.String)
    .name(java.lang.String)
//  .assignee(java.lang.String)
//  .message(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | id of the integration jira connection to use for the subscription. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.issueType">issueType</a></code> | <code>java.lang.String</code> | The type of issue to be created from the event(s). Example: Task. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.jiraProjectKey">jiraProjectKey</a></code> | <code>java.lang.String</code> | The name of the project under which the jira issue will be created. Example: OPS. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of subscription. Name must be unique. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.assignee">assignee</a></code> | <code>java.lang.String</code> | The identifier of the Jira user who will be assigned the ticket. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.message">message</a></code> | <code>java.lang.String</code> | This message will be included in the ticket description. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

id of the integration jira connection to use for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#connection_id VaultRadarIntegrationJiraSubscription#connection_id}

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.issueType"></a>

```java
public java.lang.String getIssueType();
```

- *Type:* java.lang.String

The type of issue to be created from the event(s). Example: Task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#issue_type VaultRadarIntegrationJiraSubscription#issue_type}

---

##### `jiraProjectKey`<sup>Required</sup> <a name="jiraProjectKey" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.jiraProjectKey"></a>

```java
public java.lang.String getJiraProjectKey();
```

- *Type:* java.lang.String

The name of the project under which the jira issue will be created. Example: OPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#jira_project_key VaultRadarIntegrationJiraSubscription#jira_project_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of subscription. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#name VaultRadarIntegrationJiraSubscription#name}

---

##### `assignee`<sup>Optional</sup> <a name="assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.assignee"></a>

```java
public java.lang.String getAssignee();
```

- *Type:* java.lang.String

The identifier of the Jira user who will be assigned the ticket.

In case of Jira Cloud, this will be the Atlassian Account ID of the user. Example: 71509:11bb945b-c0de-4bac-9d57-9f09db2f7bc9

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#assignee VaultRadarIntegrationJiraSubscription#assignee}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

This message will be included in the ticket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#message VaultRadarIntegrationJiraSubscription#message}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#project_id VaultRadarIntegrationJiraSubscription#project_id}

---



